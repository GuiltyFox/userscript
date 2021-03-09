// ==UserScript==
// @name         Remove facebook ads
// @namespace    https://*.facebook.com/
// @version      0.2
// @description  Remove facebook ads
// @author       You
// @match        https://*.facebook.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Remove RightRail Ads
    let adsDiv = document.querySelector('div[data-pagelet="RightRail"] div div');
    adsDiv.hidden=true;

    // Remove Feed Ads
    let feedDiv = document.querySelector('div[role="feed"]').parentNode;
    var observer = new MutationObserver(function (mutations, me) {
        for(let i in mutations){
            let nodes = mutations[i].addedNodes;
            for(let j in nodes){
                let node = nodes[j];
               // console.log(typeof node ,node);
                if(typeof node == "object"){
                    let span = node.querySelectorAll('span:not([style])')
                    let txt = Array.prototype.map.call(span, function(t) { return t.textContent[0]; }).join('')
                    if(txt.contains('Sponsored')){
                        console.log(node);
                        node.style.height = '0px';
                        node.style.overflow = 'hidden';
                    }
                }
            }
        }
    });
    if(feedDiv){
        observer.observe(feedDiv, {
            childList: true,
            subtree: true
        });
    }
})();

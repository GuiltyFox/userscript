// ==UserScript==
// @name         instagram extractor
// @namespace    GuiltyFox
// @version      1.02
// @description  extract image url
// @author       GuiltyFox
// @match        https://www.instagram.com/p/*/*
// @grant        GM_setClipboard
// @run-at       document-body
// ==/UserScript==

(function() {
    'use strict';
    let root = document.querySelector("#react-root");

    var observer = new MutationObserver(function (mutations, me) {
        let image = root.querySelector("section > main > div > div > article > div > div > div > div > img");
        if(image && image.srcset){
            let url = image.srcset.split(',')[2].split(' ')[0];
            let target = root.querySelector("section > main > div > div > article > div > section > button");
            let button1 = document.createElement("button");
            button1.className = target.className;
            button1.innerHTML = `<img src="https://img.icons8.com/metro/24/000000/copy-link.png"/>`;
            button1.onclick = function(){
                GM_setClipboard(url, 'text');
            }
            let button2 = document.createElement("button");
            button2.className = target.className;
            button2.innerHTML = `<img src="https://img.icons8.com/metro/24/000000/external-link.png"/>`;
            button2.onclick = function(){
                window.open(url,'_blank');
            }
            target.parentNode.insertBefore(button2, target.nextSibling);
            target.parentNode.insertBefore(button1, target.nextSibling);
            observer.disconnect();
        }else{
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });

})();

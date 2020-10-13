// ==UserScript==
// @name         Unblock hanime.tv
// @namespace    https://hanime.tv/videos/hentai/
// @version      1
// @description  try to take over the world!
// @author       You
// @match        https://hanime.tv/videos/hentai/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let player = document.querySelector('.player');

    var observer = new MutationObserver(function (mutations, me) {
        let prohibited = player.querySelector('.prohibited');
        if(prohibited){
            window.S.country_code = "FAKE";
        }
    });
    if(player){
        observer.observe(player, {
            childList: true,
            subtree: false
        });
    }
})();

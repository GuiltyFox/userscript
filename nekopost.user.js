// ==UserScript==
// @name         nekopost Fix button
// @namespace    GuiltyFox
// @version      1.3
// @description  Let me read manga
// @author       GuiltyFox
// @match        https://www.nekopost.net/manga/*/*
// @match        https://www.nekopost.net/doujin/*/*

// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let startButton = $('<button class="btn btn-success btn-sm"><i class="fas fa-play"></i></button>');
    startButton.click(generatePage);
    let fixButton = $('<button class="btn btn-success btn-sm"><i class="fas fa-sync-alt"></i></button>');
    fixButton.click(()=>{
        $('img').each(function() {
            if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                let original = this.src;
                let here = this;
                this.src = '';
                setTimeout(()=>{
                    here.src = original;
                }, 500);
            }
        });
    });
    $('#bottom-menu').append(startButton, ' ', fixButton);

})();

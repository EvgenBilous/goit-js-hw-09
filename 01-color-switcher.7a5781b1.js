!function(){var t=null,n={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};n.btnStop.disabled=!0,n.btnStart.addEventListener("click",(function(){t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),n.btnStop.disabled=!1,n.btnStart.disabled=!0})),n.btnStop.addEventListener("click",(function(){clearInterval(t),n.btnStop.disabled=!0,n.btnStart.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.7a5781b1.js.map
(()=>{"use strict";var t={868:(t,e,o)=>{o.r(e)},127:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this.render=()=>(this.container.innerHTML='\n      <div class="clock__planet">\n        <div class="clock__satellite"></div>\n      </div>\n      <div class="clock__digital clock-digital"></div>\n      <div class="clock__analog clock-analog hide">\n        <div class="clock-analog__inner">\n          <div class="clock-analog__num clock-analog__num--12">12</div>\n          <div class="clock-analog__num clock-analog__num--3">3</div>\n          <div class="clock-analog__num clock-analog__num--6">6</div>\n          <div class="clock-analog__num clock-analog__num--9">9</div>\n          <div class="clock-analog__arrow clock-analog__arrow--hour"></div>\n          <div class="clock-analog__arrow clock-analog__arrow--minute"></div>\n          <div class="clock-analog__arrow clock-analog__arrow--second"></div>\n        </div>\n      </div>\n    ',this.container),this.getElements=()=>{this.clockPlanet=this.container.querySelector(".clock__planet"),this.clockDigital=this.container.querySelector(".clock-digital"),this.clockAnalog=this.container.querySelector(".clock-analog"),this.hoursArrow=this.container.querySelector(".clock-analog__arrow--hour"),this.minutesArrow=this.container.querySelector(".clock-analog__arrow--minute"),this.secondsArrow=this.container.querySelector(".clock-analog__arrow--second")},this.setTime=()=>{const t=new Date;let e=t.getHours(),o=t.getMinutes(),i=t.getSeconds();const n=i/60*360+90,c=o/60*360+i/60*6+90,s=e/12*360+o/60*30+90;this.secondsArrow.style.transform=`rotate(${n}deg)`,this.minutesArrow.style.transform=`rotate(${c}deg)`,this.hoursArrow.style.transform=`rotate(${s}deg)`,this.clockPlanet.style.transform=`rotate(${s+90}deg)`,e<10&&(e=`0${e}`),o<10&&(o=`0${o}`),i<10&&(i=`0${i}`),this.clockDigital.innerHTML=`\n      <span class="clock-digital__num">${`${e}`.slice(0,1)}</span>\n      <span class="clock-digital__num">${`${e}`.slice(1)}</span>\n      <span class="clock-digital__num clock-digital__num--divider">:</span>\n      <span class="clock-digital__num">${`${o}`.slice(0,1)}</span>\n      <span class="clock-digital__num">${`${o}`.slice(1)}</span>\n    `,setTimeout((()=>this.setTime()),1e3)},this.hideClock=()=>{this.clockDigital.classList.toggle("hide"),this.clockAnalog.classList.toggle("hide")},this.addListeners=()=>{this.clockDigital.addEventListener("click",(()=>{this.hideClock()})),this.clockAnalog.addEventListener("click",(()=>{this.hideClock()}))},this.init=()=>{this.getElements(),this.setTime(),this.addListeners()},this.container=document.createElement("div"),this.container.classList.add("clock")}}},267:function(t,e,o){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=i(o(127));e.default=class{constructor(){this.addComponents=()=>{this.container.append(this.clock.render())},this.init=()=>{this.addComponents(),this.clock.init()},this.container=document.getElementById("root"),this.clock=new n.default}}},929:function(t,e,o){var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),o(868),(new(i(o(267)).default)).init()}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var c=e[i]={exports:{}};return t[i].call(c.exports,c,c.exports,o),c.exports}o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o(929)})();
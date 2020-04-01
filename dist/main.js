(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('riot')) :
  typeof define === 'function' && define.amd ? define(['riot'], factory) :
  (global = global || self, factory(global.riot));
}(this, (function (riot) { 'use strict';

  var App = {
    'css': `app .logotipo,[is="app"] .logotipo{ cursor: pointer; }`,

    'exports': {
      tocar() {
        var x = document.getElementById("audio");
        x.currentTime = 0;
        x.play();
      }
    },

    'template': function(template, expressionTypes, bindingTypes, getComponent) {
      return template(
        '<div class="uk-flex uk-flex-center uk-flex-middle uk-flex-column" uk-height-viewport uk-grid><div class="uk-width-1-2 uk-text-center"><a expr0="expr0" class="logotipo"><img src="/arquivos/imagens/logotipo.png"/></a><audio style="display: none;" id="audio"><source src="/arquivos/canto.ogg" type="audio/ogg"/></audio><p>Software & Games</p><p>contato@chibum.com</p><p>AVISO: Não clique no pássaro</p></div></div>',
        [{
          'redundantAttribute': 'expr0',
          'selector': '[expr0]',

          'expressions': [{
            'type': expressionTypes.EVENT,
            'name': 'onclick',

            'evaluate': function(scope) {
              return () => scope.tocar();
            }
          }]
        }]
      );
    },

    'name': 'app'
  };

  riot.component(App)(document.getElementById('root'));

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC5yaW90IiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPGFwcD5cclxuICA8ZGl2IGNsYXNzPVwidWstZmxleCB1ay1mbGV4LWNlbnRlciB1ay1mbGV4LW1pZGRsZSB1ay1mbGV4LWNvbHVtblwiIHVrLWhlaWdodC12aWV3cG9ydCB1ay1ncmlkPlxyXG4gICAgPGRpdiBjbGFzcz1cInVrLXdpZHRoLTEtMiB1ay10ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8YSBjbGFzcz1cImxvZ290aXBvXCIgb25jbGljaz17ICgpID0+IHRvY2FyKCkgfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9hcnF1aXZvcy9pbWFnZW5zL2xvZ290aXBvLnBuZ1wiLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YXVkaW8gc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiIGlkPVwiYXVkaW9cIj5cclxuICAgICAgICA8c291cmNlIHNyYz1cIi9hcnF1aXZvcy9jYW50by5vZ2dcIiB0eXBlPVwiYXVkaW8vb2dnXCI+XHJcbiAgICAgIDwvYXVkaW8+XHJcbiAgICAgIDxwPlNvZnR3YXJlICYgR2FtZXM8L3A+XHJcbiAgICAgIDxwPmNvbnRhdG9AY2hpYnVtLmNvbTwvcD5cclxuICAgICAgPHA+QVZJU086IE7Do28gY2xpcXVlIG5vIHDDoXNzYXJvPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICB0b2NhcigpIHtcclxuICAgICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpXHJcbiAgICAgIHguY3VycmVudFRpbWUgPSAwXHJcbiAgICAgIHgucGxheSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIDwvc2NyaXB0PlxyXG4gIDxzdHlsZT5cclxuICAgIC5sb2dvdGlwbyB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICA8L3N0eWxlPlxyXG48L2FwcD4iLCJpbXBvcnQge2NvbXBvbmVudH0gZnJvbSAncmlvdCdcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5yaW90J1xyXG5cclxuY29tcG9uZW50KEFwcCkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkiXSwibmFtZXMiOlsiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O01BZ0JJLEtBQUssR0FBRztRQUNOLElBQUksSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDdkMsQ0FBQyxDQUFDLGNBQWM7UUFDaEIsQ0FBQyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBaEJ3QixZQUFNLEtBQUs7Ozs7Ozs7Ozs7QUNBL0NBLGdCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Ozs7In0=

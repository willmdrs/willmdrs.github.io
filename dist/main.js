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
        '<div class="uk-flex uk-flex-center uk-flex-middle uk-flex-column" uk-height-viewport uk-grid><div class="uk-width-1-2 uk-text-center"><a expr0="expr0" class="logotipo"><img src="/arquivos/imagens/logotipo.png"/></a><audio style="display: none;" id="audio"><source src="/arquivos/canto.ogg" type="audio/ogg"/></audio><p>Software & Games</p><p>contato@chibum.com</p></div></div>',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC5yaW90IiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPGFwcD5cclxuICA8ZGl2IGNsYXNzPVwidWstZmxleCB1ay1mbGV4LWNlbnRlciB1ay1mbGV4LW1pZGRsZSB1ay1mbGV4LWNvbHVtblwiIHVrLWhlaWdodC12aWV3cG9ydCB1ay1ncmlkPlxyXG4gICAgPGRpdiBjbGFzcz1cInVrLXdpZHRoLTEtMiB1ay10ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8YSBjbGFzcz1cImxvZ290aXBvXCIgb25jbGljaz17ICgpID0+IHRvY2FyKCkgfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9hcnF1aXZvcy9pbWFnZW5zL2xvZ290aXBvLnBuZ1wiLz5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YXVkaW8gc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiIGlkPVwiYXVkaW9cIj5cclxuICAgICAgICA8c291cmNlIHNyYz1cIi9hcnF1aXZvcy9jYW50by5vZ2dcIiB0eXBlPVwiYXVkaW8vb2dnXCI+XHJcbiAgICAgIDwvYXVkaW8+XHJcbiAgICAgIDxwPlNvZnR3YXJlICYgR2FtZXM8L3A+XHJcbiAgICAgIDxwPmNvbnRhdG9AY2hpYnVtLmNvbTwvcD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgdG9jYXIoKSB7XHJcbiAgICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb1wiKVxyXG4gICAgICB4LmN1cnJlbnRUaW1lID0gMFxyXG4gICAgICB4LnBsYXkoKVxyXG4gICAgfVxyXG4gIH1cclxuICA8L3NjcmlwdD5cclxuICA8c3R5bGU+XHJcbiAgICAubG9nb3RpcG8ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgPC9zdHlsZT5cclxuPC9hcHA+IiwiaW1wb3J0IHtjb21wb25lbnR9IGZyb20gJ3Jpb3QnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAucmlvdCdcclxuXHJcbmNvbXBvbmVudChBcHApKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpIl0sIm5hbWVzIjpbImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztNQWVJLEtBQUssR0FBRztRQUNOLElBQUksSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU87UUFDdkMsQ0FBQyxDQUFDLGNBQWM7UUFDaEIsQ0FBQyxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBZndCLFlBQU0sS0FBSzs7Ozs7Ozs7OztBQ0EvQ0EsZ0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7OzsifQ==

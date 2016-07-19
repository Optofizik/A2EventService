System.register(["angular2/core", "../service/event.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, event_service_1;
    var FirstComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            FirstComponent = (function () {
                function FirstComponent(eventService) {
                    this.eventService = eventService;
                    this.isActive = false;
                    this.title = "First component";
                }
                FirstComponent.prototype.onRaiseEvent = function (value) {
                    this.eventService.raiseEvent(this, value, value);
                };
                FirstComponent = __decorate([
                    core_1.Component({
                        selector: 'first',
                        template: "\n                <div class=\"first-component\">\n                    <h2>{{ title }}</h2>\n                    <button (click)=\"onRaiseEvent('first')\">Raise First</button><br /><br />\n                    <button (click)=\"onRaiseEvent('second')\">Raise Second</button><br />\n                </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService])
                ], FirstComponent);
                return FirstComponent;
            }());
            exports_1("FirstComponent", FirstComponent);
        }
    }
});
//# sourceMappingURL=first.component.js.map
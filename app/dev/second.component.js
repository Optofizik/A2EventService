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
    var SecondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            SecondComponent = (function () {
                function SecondComponent(eventService) {
                    this.eventService = eventService;
                    this.title = "Second component";
                    this.isActive = false;
                    this.isSecond = false;
                    this.subList = { first: false, second: false };
                }
                SecondComponent.prototype.changeActivity = function (value, object) {
                    switch (value) {
                        case "first":
                            object.isActive = !object.isActive;
                            break;
                        case "second":
                            object.isSecond = !object.isSecond;
                            break;
                    }
                };
                SecondComponent.prototype.onEvent = function (evName) {
                    if (this.subList[evName]) {
                        this.subList[evName] = false;
                        this.eventService.unsubscribeFromEvent(this, evName);
                    }
                    else {
                        this.subList[evName] = true;
                        this.eventService.subscriveToEvent(this, evName, this.changeActivity);
                    }
                };
                SecondComponent = __decorate([
                    core_1.Component({
                        selector: 'second',
                        template: "\n                <div class=\"second-component\">\n                    <h2>{{ title }}</h2>\n                    <div [ngClass]=\"{active: isActive, disabled: !isActive}\"></div><br />\n                    <button (click)=\"onEvent('first')\">First event </button><br/>\n                    <label *ngIf=\"isSecond\">Second Event &nbsp;</label>\n                    <button (click)=\"onEvent('second')\">Second Event</button>\n                </div>\n              "
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService])
                ], SecondComponent);
                return SecondComponent;
            }());
            exports_1("SecondComponent", SecondComponent);
        }
    }
});
//# sourceMappingURL=second.component.js.map
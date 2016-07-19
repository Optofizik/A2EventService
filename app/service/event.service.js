System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Event, SenderCallback, EventService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Event = (function () {
                function Event() {
                    this.Subsribers = [];
                }
                return Event;
            }());
            SenderCallback = (function () {
                function SenderCallback() {
                }
                return SenderCallback;
            }());
            EventService = (function () {
                function EventService() {
                    this.eventArray = [];
                }
                EventService.prototype.subscriveToEvent = function (object, eventName, callbackFunc) {
                    var event = this.eventArray.find(function (ev, i, arr) {
                        return ev.EventName === eventName;
                    });
                    if (event == null) {
                        event = new Event();
                        event.EventName = eventName;
                        var senderCallback = new SenderCallback();
                        senderCallback.Sender = object;
                        senderCallback.Callback = callbackFunc;
                        event.Subsribers.push(senderCallback);
                        this.eventArray.push(event);
                    }
                    else {
                        var isExists = event.Subsribers.filter(function (listener, i, arr) {
                            return listener.Sender === object;
                        }).length > 0;
                        if (!isExists) {
                            var senderCallback = new SenderCallback();
                            senderCallback.Sender = object;
                            senderCallback.Callback = callbackFunc;
                            event.Subsribers.push(senderCallback);
                        }
                    }
                };
                EventService.prototype.raiseEvent = function (sender, eventName, valueToBroadcast) {
                    var event = this.eventArray.find(function (ev, i, arr) {
                        return ev.EventName === eventName;
                    });
                    if (event != null) {
                        event.Subsribers.forEach(function (ev, i, arr) {
                            if (ev.Sender != sender) {
                                ev.Callback(valueToBroadcast, ev.Sender);
                            }
                        });
                    }
                };
                EventService.prototype.unsubscribeFromEvent = function (object, eventName) {
                    var event = this.eventArray.find(function (ev, i, arr) {
                        return ev.EventName === eventName;
                    });
                    var num = 0;
                    var subscriber = event.Subsribers.find(function (s, i, arr) {
                        if (s.Sender === object) {
                            num = i;
                            return true;
                        }
                        return false;
                    });
                    event.Subsribers.splice(num, 1);
                };
                EventService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EventService);
                return EventService;
            }());
            exports_1("EventService", EventService);
        }
    }
});
//# sourceMappingURL=event.service.js.map
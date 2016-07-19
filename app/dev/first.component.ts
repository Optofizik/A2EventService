import {Component} from "angular2/core";
import {EventService} from "../service/event.service";

@Component({
    selector: 'first',
    template: `
                <div class="first-component">
                    <h2>{{ title }}</h2>
                    <button (click)="onRaiseEvent('first')">Raise First</button><br /><br />
                    <button (click)="onRaiseEvent('second')">Raise Second</button><br />
                </div>
              `
})
export class  FirstComponent {
    
    public isActive: boolean = false;
    public title: string = "First component";

    constructor(private eventService: EventService) {  }

    onRaiseEvent(value: string): void {
        this.eventService.raiseEvent(this, value, value)
    }}

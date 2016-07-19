import {Component, OnInit} from "angular2/core";
import {EventService} from "../service/event.service";

@Component({
    selector: 'second',
    template: `
                <div class="second-component">
                    <h2>{{ title }}</h2>
                    <div [ngClass]="{active: isActive, disabled: !isActive}"></div><br />
                    <button (click)="onEvent('first')">First event </button><br/>
                    <label *ngIf="isSecond">Second Event &nbsp;</label>
                    <button (click)="onEvent('second')">Second Event</button>
                </div>
              `
})
export class  SecondComponent  {

    public title: string = "Second component";
    public isActive: boolean = false;
    public isSecond: boolean = false;
    private subList = { first: false, second: false}

    constructor(private eventService: EventService) { }
    
    changeActivity(value: string, object: any): void {
        
        switch(value) {
            case "first":
                object.isActive = !object.isActive;
                break;
            case "second":
                object.isSecond = !object.isSecond;
                break;
        }
    }

    onEvent(evName: string): void {

        if(this.subList[evName]) {
            this.subList[evName] = false;
            this.eventService.unsubscribeFromEvent(this, evName);
        }
        else
        {
            this.subList[evName] = true;
            this.eventService.subscriveToEvent(this, evName, this.changeActivity);
        }
    }
}


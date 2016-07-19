import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {EventService} from "./service/event.service";

bootstrap(AppComponent,[EventService]);
import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
       '(focus)':'onFocus()',
       '(blur)': 'onBlur()' 
    }
})
export class AutoGrowDirective {

    constructor(private el:ElementRef, private renderer: Renderer) {
    }

    onfocus() : void {
        this.renderer.setElementStyle(this.el, 'width', '200');
    }

    onBlur() : void {
        this.renderer.setElementStyle(this.el, 'width', '120');
    }
}
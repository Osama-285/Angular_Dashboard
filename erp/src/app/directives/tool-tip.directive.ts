import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToolTip]',
})
export class ToolTipDirective {
  @Input() appToolTip: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}

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
  @Input() appTooltip: any;
  tooltipElement: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip');
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appTooltip) {
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    const tooltipContent = document.createTextNode(this.appTooltip.name);
    this.renderer.appendChild(this.tooltipElement, tooltipContent);

    const parentElement = this.el.nativeElement.parentNode;
    this.renderer.appendChild(parentElement, this.tooltipElement);
  }

  private hideTooltip() {
    this.renderer.removeChild(
      this.el.nativeElement.parentNode,
      this.tooltipElement
    );
  }
}

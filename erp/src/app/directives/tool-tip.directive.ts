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
  isTooltipVisible = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.addClass(this.tooltipElement, 'tooltip');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
    this.isTooltipVisible = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    console.log('IN', this.appTooltip);
    if (!this.isTooltipVisible) {
      const tooltipContent = document.createTextNode(this.appTooltip.category);
      console.log(tooltipContent);
      this.renderer.appendChild(this.tooltipElement, tooltipContent);

      const parentElement = this.el.nativeElement.parentNode;
      // this.renderer.appendChild(parentElement, this.tooltipElement);

      this.isTooltipVisible = true;
    }
  }

  private hideTooltip() {
    console.log('leave');
    this.renderer.removeChild(
      this.el.nativeElement.parentNode,
      this.tooltipElement
    );
    this.isTooltipVisible = false;
  }
}

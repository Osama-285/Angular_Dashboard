import { Component } from '@angular/core';
import { productInfo } from 'src/app/constants/inventory.constants';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css', './inventoryItem.component.css'],
  // directives: [ToolTipDirective],
})
export class InventoryComponent {
  selectedOption: string = 'option1';
  hoveredProduct: Object = {};
  products = productInfo;
  onOptionSelected(): void {
    console.log('Selected Option:', this.selectedOption);
  }

  setHoveredProduct(product: Object): void {
    this.hoveredProduct = product;
    // console.log(this.hoveredProduct);
  }

  clearHoveredProduct(): void {
    this.hoveredProduct = {};
  }

  isHovered(product: Object): boolean {
    // console.log('isHovered', product);
    return this.hoveredProduct === product;
  }
}

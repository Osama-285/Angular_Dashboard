import { Component } from '@angular/core';
import { ToolTipDirective } from 'src/app/directives/tool-tip.directive';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css', './inventoryItem.component.css'],
  // directives: [ToolTipDirective],
})
export class InventoryComponent {
  selectedOption: string = 'option1';
  hoverdProduct: Object = {};
  hoveredProduct: Object = {};
  products = [
    {
      productCode: 'ATX-032113',
      productName: 'Tablet',
      description:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem, asperiores.',
      category: 'Electronic',
      stock: '1200',
      sales: '450',
    },
  ];
  onOptionSelected(): void {
    console.log('Selected Option:', this.selectedOption);
  }

  setHoveredProduct(product: Object): void {
    this.hoverdProduct = product;
    console.log(this.hoverdProduct);
  }

  clearHoveredProduct(): void {
    this.hoverdProduct = {};
  }

  isHovered(product: Object): boolean {
    console.log('isHovered', product);
    return this.hoveredProduct === product;
  }
}

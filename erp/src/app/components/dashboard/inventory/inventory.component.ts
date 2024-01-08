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
  isHovered = false;
  product = [
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

  onMouseEnter(product: any) {
    console.log('Mouse entered. Product data:', product);
    this.isHovered = true;
  }

  onMouseLeave(product: any) {
    console.log('Mouse left. Product data:', product);
    this.isHovered = false;
  }
}

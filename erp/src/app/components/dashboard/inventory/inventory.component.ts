import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css', './inventoryItem.component.css'],
})
export class InventoryComponent {
  selectedOption: string = 'option1';

  onOptionSelected(): void {
    console.log('Selected Option:', this.selectedOption);
  }
}

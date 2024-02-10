import { Component } from '@angular/core';
import { productInfo } from 'src/app/constants/inventory.constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css', './inventoryItem.component.css'],
})
export class InventoryComponent {
  selectedOption: string = 'option1';
  openForm: boolean = false;
  hoveredProduct: Object = {};
  products = productInfo;
  protected productAddForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productAddForm = this.fb.group({
      code: ['', Validators.required],
      brand: ['', Validators.required],
      desc: ['', Validators.required],
      categories: ['', Validators.required],
      stock: ['', Validators.required],
      sales: ['', Validators.required],
    });
  }
  onOptionSelected(): void {
    // console.log('Selected Option:', this.selectedOption);
  }

  setHoveredProduct(product: Object): void {
    // this.hoveredProduct = product;
  }

  clearHoveredProduct(): void {
    // this.hoveredProduct = {};
  }

  isHovered(product: Object): boolean {
    return this.hoveredProduct === product;
  }

  productForm() {
    this.openForm = true;
  }

  closeModal() {
    this.openForm = false;
  }
}

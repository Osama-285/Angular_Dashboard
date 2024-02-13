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
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productAddForm = this.fb.group({
      code: ['', Validators.required],
      brand: ['', Validators.required],
      desc: ['', Validators.required],
      categories: ['', Validators.required],
      stock: ['', Validators.required],
      sales: ['', Validators.required],
      image: [null, Validators.required],
    });
  }
  onOptionSelected(): void {
    // console.log('Selected Option:', this.selectedOption);
  }
  onImageSelected(event: any) {
    const file: File = event.target.files[0]; // Get the selected file
    if (file) {
      this.selectedImage = file; // Set the selected image file
      this.productAddForm.get('image')?.setValue(file); // Set the form control value to the selected file
    }
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

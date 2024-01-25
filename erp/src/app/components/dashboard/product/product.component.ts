import { Component } from '@angular/core';
import { products } from 'src/app/constants/product.constants';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  protected allProduct = products;
  psize = 12;
  currentPage = 1;
}

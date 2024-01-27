import { Component } from '@angular/core';
import { products } from 'src/app/constants/product.constants';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  protected allProduct = products;
  searchText: string = '';
  psize = 12;
  currentPage = 1;

  get filteredItems() {
    if (!this.searchText.trim()) {
      return products;
    }

    const searchTextArray = this.searchText.trim().toLowerCase().split(' ');

    return products.filter((item) => {
      return searchTextArray.every((word) => {
        return (
          item.name.toLowerCase().includes(word) ||
          item.descrption.toLowerCase().includes(word)
        );
      });
    });
  }
}

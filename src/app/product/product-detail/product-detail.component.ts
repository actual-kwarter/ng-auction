import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  constructor() { }

  @Input product: Product;

  ngOnInit() {
  }
}

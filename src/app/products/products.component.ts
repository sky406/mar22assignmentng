import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productlist = ["p1","p2","p3","p4"]

  constructor() { }

  ngOnInit(): void {
  }

}

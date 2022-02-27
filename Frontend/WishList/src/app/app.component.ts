import { Component, OnInit } from '@angular/core';
import { WishListService } from './services/wish-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WishList';
  products: any;

  constructor(public wishListService: WishListService)
  {

  }

  ngOnInit()
  {
    this.wishListService.getAllproducts().subscribe(productsData =>
      {
        this.products = productsData;
        console.log(this.products)
      }
    );
  }
}

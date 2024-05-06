import { Component, OnInit } from '@angular/core';
import { products } from '../../data/product.data';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.component.html',
  styles: ``
})
export class CatalogoComponent implements OnInit {

 products!: Product[];


  

  constructor(
    private productService: ProductService,
    private sharingDataService: SharingDataService){ }
    
  
  ngOnInit(): void {
      this.products = this.productService.findAll()
    
  }

  onAddCart(product: Product){
    this.sharingDataService.productEventEmitter.emit(product)
  }

}

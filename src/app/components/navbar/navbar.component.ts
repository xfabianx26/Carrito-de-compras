import { Component, Input } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { RouterModule } from '@angular/router';
import { products } from '../../data/product.data';
import { Product } from '../../models/product';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  @Input() items: CartItem[] = []


  @Input() total: number = 0;

  

}

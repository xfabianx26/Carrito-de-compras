import { Component, EventEmitter} from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {


   items: CartItem[] = []

   total: number = 0

  idProductEventEmitter = new EventEmitter();

    
  constructor( 
    private router: Router,
    private sharingDataService: SharingDataService
  
  ){
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
  }



  onDeleteCart(id:number){
     this.sharingDataService.idProductEventEmitter.emit(id)
  }



}

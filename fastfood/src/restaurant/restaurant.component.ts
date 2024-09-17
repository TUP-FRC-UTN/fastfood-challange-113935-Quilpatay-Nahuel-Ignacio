import { Component } from '@angular/core';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { PosComponent } from '../pos/pos.component';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [DeliveryPointComponent, KitchenComponent, PosComponent],
  templateUrl: './restaurant.component.html',
})
export class RestaurantComponent {}

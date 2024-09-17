import { Component, EventEmitter, Output } from '@angular/core';
import { Pedido } from '../models/pedido';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
})
export class PosComponent {
  newPedido: Pedido = new Pedido(Math.floor(Math.random() * 1000), '', '', new Date());

  constructor(private pedidoService: PedidoService) {}

  addPedido() {
    if (this.newPedido.name && this.newPedido.description) {
      this.newPedido.date = new Date();
      this.pedidoService.agregarPedido(this.newPedido);
      this.newPedido = new Pedido(Math.floor(Math.random() * 1000), '', '', new Date());
    }
  }
}

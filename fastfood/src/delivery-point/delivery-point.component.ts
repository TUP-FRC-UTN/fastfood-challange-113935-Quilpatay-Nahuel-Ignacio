import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-point.component.html',
})
export class DeliveryPointComponent {
  paraEntregar: Pedido[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.paraEntregar = this.pedidoService.getParaEntregar();
  }

  entregarPedido(pedido: Pedido) {
    this.pedidoService.entregarPedido(pedido);
    this.paraEntregar = this.pedidoService.getParaEntregar();
  }
}

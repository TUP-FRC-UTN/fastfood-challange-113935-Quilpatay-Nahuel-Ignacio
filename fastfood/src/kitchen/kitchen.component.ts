import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';
import { PedidoService } from '../services/pedido.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen.component.html',
})
export class KitchenComponent {
  pendientes: Pedido[] = [];
  enCoccion: Pedido | null = null;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pendientes = this.pedidoService.getPendientes();
    this.enCoccion = this.pedidoService.getEnCoccion();
  }

  cocinarPedido(pedido: Pedido) {
    this.pedidoService.cocinarPedido(pedido);
    this.pendientes = this.pedidoService.getPendientes();
    this.enCoccion = this.pedidoService.getEnCoccion();
  }

  terminarPedido() {
    this.pedidoService.terminarPedido();
    this.enCoccion = this.pedidoService.getEnCoccion();
  }
}

import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pendientes: Pedido[] = [];
  private paraEntregar: Pedido[] = [];
  private enCoccion: Pedido | null = null;

  agregarPedido(pedido: Pedido) {
    this.pendientes.push(pedido);
  }

  getPendientes() {
    return this.pendientes;
  }

  getEnCoccion() {
    return this.enCoccion;
  }

  cocinarPedido(pedido: Pedido) {
    if (!this.enCoccion) {
      this.enCoccion = pedido;
      this.pendientes = this.pendientes.filter(p => p !== pedido);
    }
  }

  terminarPedido() {
    if (this.enCoccion) {
      this.paraEntregar.push(this.enCoccion);
      this.enCoccion = null;
    }
  }

  getParaEntregar() {
    return this.paraEntregar;
  }

  entregarPedido(pedido: Pedido) {
    this.paraEntregar = this.paraEntregar.filter(p => p !== pedido);
  }
}

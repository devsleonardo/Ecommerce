import { ItemCart } from '../model/itencart.model';
import { OffersModel } from '../model/offers.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  public itens: ItemCart[] = [];

  constructor(private http: HttpClient) {}

  public exibirItens(): ItemCart[] {
    return this.itens;
  }

  public incluirItem(offers: OffersModel): void {
    let itemCarrinho: ItemCart = new ItemCart(
      offers.id,
      offers.imagens,
      offers.titulo,
      offers.descricao_oferta,
      offers.valor,
      1
    );

    //Verificar se o item ja existe
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCart) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinho);
    }
  }

  //somar valor total do carrinho

  public totalItemCarrinho(): number {
    let total: number = 0;
    this.itens.map((item: ItemCart) => {
      total += item.valor * item.quantidade;
    });

    return total;
  }

  //Modificar Quantidade
  public adicionarQuantidade(itemCarrinho: ItemCart): void {
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCart) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    }
  }

  public diminuirQuantidade(itemCarrinho: ItemCart): void {
    let itemCarrinhoEncontrado = this.itens.find(
      (item: ItemCart) => item.id === itemCarrinho.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade -= 1;

      if (itemCarrinhoEncontrado.quantidade === 0) {
        let x = this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
      }
    }
  }
}

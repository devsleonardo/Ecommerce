import { ItemCart } from './../shared/model/itencart.model';
import { PurchaseModel } from './../shared/model/purchase.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PurchaseService } from '../shared/service/purchase.service';
import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  providers: [PurchaseService],
})
export class PurchaseComponent implements OnInit {
  public purchaseId: number;
  public itensCarrinho: ItemCart[];

  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(5),
    ]),
    complemento: new FormControl(null, []),
    formaPagamento: new FormControl(null, [Validators.required]),
  });

  constructor(private purchaseService: PurchaseService, public cartService: CartService) {}

  ngOnInit(): void {
    this.itensCarrinho = this.cartService.exibirItens();
  }

  //Validação de botao atravas do Touched - Tocar na caixa
  public readPurchase(): void {
    if (this.formulario.status == 'INVALID') {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
    } else {
      if (this.cartService.exibirItens().length === 0) {
        alert('Você não selecionou nenhum item');
      } else {
        const purchase = new PurchaseModel(
          this.formulario.value.endereco,
          this.formulario.value.numero,
          this.formulario.value.complemento,
          this.formulario.value.formaPagamento,
          this.cartService.exibirItens()
        );
        this.purchaseService.readPurchase(purchase).subscribe((res: number) => {
          this.purchaseId = res;
          this.cartService.limparCarrinho();
        });
      }
    }
  }
  public adicionar(item: ItemCart): void {
    this.cartService.adicionarQuantidade(item);
    console.log(item.quantidade);
  }

  public diminuir(item: ItemCart): void {
    this.cartService.diminuirQuantidade(item);
  }
}

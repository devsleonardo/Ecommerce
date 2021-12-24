import { OffersModel } from './../shared/model/offers.model';
import { PurchaseModel } from './../shared/model/purchase.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PurchaseService } from '../shared/service/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  providers: [PurchaseService],
})
export class PurchaseComponent implements OnInit {
  @ViewChild('formulario') public formulario: NgForm;

  public purchaseId: number;

  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {}

  public confirmarCompra(): void {
    let purchase: PurchaseModel = new PurchaseModel(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento
    );

    this.purchaseService.readPurchase(purchase).subscribe((res: number) => {
      this.purchaseId = res;
    });
  }
}

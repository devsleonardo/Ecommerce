import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../shared/service/purchase.service';
import { PurchaseModel } from '../shared/model/purchase.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  providers: [PurchaseService],
})
export class PurchaseComponent implements OnInit {
  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {}

  //Variavel
  public purchase: PurchaseModel[] = [];
  public purchaseId: number;

  //Pedido
  public read: PurchaseModel = new PurchaseModel('', '', '', '');

  public address: string = '';
  public number: string = '';
  public complement: string = '';
  public formMoney: string = '';

  //Controle de validação dos campos
  public addressValid: boolean;
  public numberValid: boolean;
  public complementValid: boolean;
  public formMoneyValid: boolean;

  //Estados Primitivos dos campos (Pristine)

  public addressStatsPritine: boolean = true;
  public numberStatsPritine: boolean = true;
  public complementStatsPritine: boolean = true;
  public formMoneyStatsPritine: boolean = true;

  // Controlar Botão confirmar compra

  public formStatsButton: string = 'disabled ';

  public upAddress(address: string): void {
    this.address = address;
    this.addressStatsPritine = false;
    if (this.address.length > 3) {
      this.addressValid = true;
    } else {
      this.addressValid = false;
    }
    this.formActivate();
  }

  public upNumber(number: string): void {
    this.number = number;
    this.numberStatsPritine = false;
    if (this.number.length > 0) {
      this.numberValid = true;
    } else {
      this.numberValid = false;
    }
    this.formActivate();
  }

  public upComplement(complement: string): void {
    this.complement = complement;
    this.complementStatsPritine = false;
    if (this.complement.length > 0) {
      this.complementValid = true;
    }
    this.formActivate();
  }

  public upFormMoney(formMoney: string): void {
    this.formMoney = formMoney;
    this.formMoneyStatsPritine = false;
    if (this.formMoney.length > 0) {
      this.formMoneyValid = true;
    } else {
      this.formMoneyValid = false;
    }
    this.formActivate();
  }

  public formActivate(): void {
    if (
      this.addressValid === true &&
      this.numberValid === true &&
      this.formMoneyValid === true
    ) {
      this.formStatsButton = '';
    } else {
      this.formStatsButton = 'disabled';
    }
  }

  public readPurchaseUp(): void {
    this.read.address = this.address;
    this.read.number = this.number;
    this.read.complement = this.complement;
    this.read.formMoney = this.formMoney;
    this.purchaseService.readPurchase(this.read).subscribe((id: number) => {
      this.purchaseId = id;
    });
  }
}

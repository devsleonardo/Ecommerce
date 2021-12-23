import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  public address: string = '';
  public number: string = '';
  public complement: string = '';
  public formMoney: string = '';

  //Controle de validação dos campos
  public addressValid: boolean;
  public numberValid: boolean;
  public complementValid: boolean;
  public formMoneyValid: boolean;

  constructor() {}

  ngOnInit(): void {}

  public upAddress(address: string): void {
    this.address = address;
    if (this.address.length > 3) {
      this.addressValid = true;
    } else {
      this.addressValid = false;
    }
  }

  public upNumber(number: string): void {
    this.number = number;
    if (this.number.length > 0) {
      this.numberValid = true;
    } else {
      this.numberValid = false;
    }
  }

  public upComplement(complement: string): void {
    this.complement = complement;
    if (this.complement.length > 0) {
      this.complementValid = true;
    }
  }

  public upFormMoney(formMoney: string): void {
    this.formMoney = formMoney;
    if (this.formMoney.length > 0) {
      this.formMoneyValid = true;
    } else {
      this.formMoneyValid = false;
    }
  }
}

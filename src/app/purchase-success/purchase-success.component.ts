import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-success',
  templateUrl: './purchase-success.component.html',
  styleUrls: ['./purchase-success.component.scss'],
})
export class PurchaseSuccessComponent implements OnInit {
  //exiber informação dentro da aplicaçao via html
  @Input() public purchaseId: number;
  constructor() {}

  ngOnInit(): void {}
}

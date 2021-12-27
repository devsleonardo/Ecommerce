import { ItemCart } from './itencart.model';
export class PurchaseModel {
  constructor(
    public address: string,
    public number: string,
    public complement: string,
    public formMoney: string,
    public itemCart: Array<ItemCart>
  ) {}
}

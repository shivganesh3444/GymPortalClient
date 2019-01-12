import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { Observable } from 'rxjs/Observable';
// import * as moment from 'moment';
import { Fees } from '../model/fees.model';

@Injectable()
export class FeesService {


  public fees: Fees;

  public fees$: Observable<Fees>;
  private feesModel: Model<Fees>;

  public feesList$: Observable<Fees[]>;
  private feesListModel: Model<Fees[]>;


  constructor(private feesModelFactory: ModelFactory<Fees>,
    private feesListModelFactory: ModelFactory<Fees[]>) {

    this.feesModel = this.feesModelFactory.create(null);
    this.fees$ = this.feesModel.data$;
    this.feesListModel = this.feesListModelFactory.create([]);
    this.feesList$ = this.feesListModel.data$;
  }

}

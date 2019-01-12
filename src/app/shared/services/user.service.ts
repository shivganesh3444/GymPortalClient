import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AvatarService {
  public user: User;

  public user$: Observable<User>;
  private userModel: Model<User>;

  public userList$: Observable<User[]>;
  private userListModel: Model<User[]>;


  constructor(private userModelFactory: ModelFactory<User>,
    private userListModelFactory: ModelFactory<User[]>) {

    this.userModel = this.userModelFactory.create(null);
    this.user$ = this.userModel.data$;
    this.userListModel = this.userListModelFactory.create([]);
    this.userList$ = this.userListModel.data$;
  }

}

import { Injectable } from '@angular/core';
import { Model, ModelFactory } from '@angular-extensions/model';
import { User } from '../model/user.model';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  public user: User;
  public user$: Observable<User>;
  private userModel: Model<User>;
  public userList$: Observable<User[]>;
  private userListModel: Model<User[]>;

  private readonly getAllUsersPath = '/users';
  private readonly getUserPath = '/users';

  constructor(private userModelFactory: ModelFactory<User>,
    private userListModelFactory: ModelFactory<User[]>,
    private restService: RestService) {

    this.userModel = this.userModelFactory.create(null);
    this.user$ = this.userModel.data$;
    this.userListModel = this.userListModelFactory.create([]);
    this.userList$ = this.userListModel.data$;
  }

  getUserById(id: number) {

  }
  getAllUsers() {
    this.restService.get(this.getAllUsersPath).subscribe(data => {
      if (data) {
        this.userListModel.set(data);
      }
    });
  }

  getSuspendedUsers() {

  }
  getBirthdayUsers() {

  }

}

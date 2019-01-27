import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/models/user.model';
import {AppState} from 'src/app/store/app.reducer';
import {Store} from '@ngrx/store';
import {LoadUsers} from 'src/app/store/actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  subscription: Subscription = new Subscription();
  loading: boolean;
  error: any;

  constructor(private userService: UserService, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.subscription = this.store.select('users').subscribe(users => {
      this.users = users.users;
      this.loading = users.loading;
      this.error = users.error;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

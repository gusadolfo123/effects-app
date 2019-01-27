import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from 'src/app/store/app.reducer';
import {User} from 'src/app/models/user.model';
import {Subscription} from 'rxjs';
import {LoadUser} from 'src/app/store/actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [],
})
export class UserComponent implements OnInit, OnDestroy {
  user: User = null;
  subscription: Subscription = new Subscription();
  userSubscription: Subscription = new Subscription();
  loading: boolean;
  error: any;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      // Trae el usuario que fue previamente cargado
      // const id = Number(params['id']);
      // this.store.select('users').subscribe(data => {
      //   this.user = data.users.find(user => user.id === id);
      // });
      const id = params['id'];
      this.store.dispatch(new LoadUser(id));
      this.userSubscription = this.store.select('user').subscribe(data => {
        this.user = data.user;
        this.loading = data.loading;
        this.error = data.error;
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}

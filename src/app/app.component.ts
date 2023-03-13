import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AppState, AppStateModel, NextStep } from './state/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';


  currentStep$: Observable<number>;

  
  constructor(private store: Store){
    this.currentStep$ = this.store.select(state => state.appState.currentStep);
  }

  next() {
    console.log('next clicked');
    this.store.dispatch(new NextStep())
  }
}

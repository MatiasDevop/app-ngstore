import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changechannelname, decrement, increment, reset } from '../../shared/store/counter.actions';
import {MatButtonModule} from '@angular/material/button';
import { CounterModel } from '../../shared/store/counter.model';
import { AppStateModel } from '../../shared/store/Global/AppState.model';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.css'
})
export class CounterbuttonComponent {

  //private store = Inject(Store);
  count$?: Observable<number>;

  constructor(private store:Store<AppStateModel>){
   // this.count$ = this.store.select('counter');
  }

  OnIncrement(){
    console.log("clickkkkkkk")
    this.store.dispatch(increment());
  }

  OnDecrement(){
    this.store.dispatch(decrement())
  }

  OnReset(){
    this.store.dispatch(reset());
  }

  OnRename(){
    this.store.dispatch(changechannelname({channel: 'welcome to mat lab'}))
  }
}

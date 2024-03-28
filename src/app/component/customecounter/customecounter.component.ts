import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { FormsModule } from '@angular/forms';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getchannelname } from '../../shared/store/counter.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.model';

@Component({
  selector: 'app-customecounter',
  standalone: true,
  imports: [MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './customecounter.component.html',
  styleUrl: './customecounter.component.css',
})
export class CustomecounterComponent implements OnInit{

  channelname = '';
  counterinput!: number;
  actiontype: string = "add";
  countersubcribe !: Subscription;
  constructor(private store: Store<AppStateModel>) {}
  
  ngOnInit(): void {
    this.countersubcribe = this.store.select(getchannelname).subscribe(data => {
      this.channelname = data;
      console.log("Counter custome")
    })
  }

  
  OnIncrement() {
    this.store.dispatch(customincrement({value: +this.counterinput, action: this.actiontype }));
  }
}

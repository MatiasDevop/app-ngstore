import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { Store } from '@ngrx/store';
import { customincrement } from '../../shared/store/counter.actions';
import { FormsModule } from '@angular/forms';
import { CounterModel } from '../../shared/store/counter.model';

@Component({
  selector: 'app-customecounter',
  standalone: true,
  imports: [MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './customecounter.component.html',
  styleUrl: './customecounter.component.css',
})
export class CustomecounterComponent {

  constructor(private store: Store<{ counter: CounterModel}>) {}
  
  counterinput!: number;
  actiontype: string = "add";
  OnIncrement() {

    this.store.dispatch(customincrement({value: +this.counterinput, action: this.actiontype }));
  }
}

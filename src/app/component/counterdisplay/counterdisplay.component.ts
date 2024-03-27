import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from '../../shared/store/counter.model';
import { CommonModule } from '@angular/common';
import { getcounter } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counterdisplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterdisplay.component.html',
  styleUrl: './counterdisplay.component.css',
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  //private store = Inject(Store);
  count$?: Observable<number>;

  counterDisplay?: number;
  channelname = '';
  countersubscribe!: Subscription;
  counter$!: Observable<CounterModel>;

  constructor(private store: Store<{ counter: CounterModel }>) {
    // this.count$ = this.store.select('counter');
  }

  ngOnInit(): void {
    this.countersubscribe = this.store
      .select(getcounter)
      .subscribe(data => {
        this.counterDisplay = data;
        console.log("Counter Display")
      });

    //this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    // if (this.countersubscribe) {
    //   this.countersubscribe.unsubscribe();
    // }
  }
}

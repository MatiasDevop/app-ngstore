import { Component } from '@angular/core';
import { CounterbuttonComponent } from '../counterbutton/counterbutton.component';
import { CounterdisplayComponent } from '../counterdisplay/counterdisplay.component';
import { CustomecounterComponent } from '../customecounter/customecounter.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounterbuttonComponent, CounterdisplayComponent, CustomecounterComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

}

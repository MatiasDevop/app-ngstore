import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { CustomecounterComponent } from './component/customecounter/customecounter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterbuttonComponent, CounterdisplayComponent, CustomecounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-store-app';
}

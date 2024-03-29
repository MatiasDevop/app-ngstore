import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent {

  constructor(private dialogref: MatDialogRef<AddblogComponent>){

  }
  Closepopup(){
    this.dialogref.close();
  }

}


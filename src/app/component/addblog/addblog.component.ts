import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { BlogModel } from '../../shared/store/Blog/blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import { addblog } from '../../shared/store/Blog/blog.actions';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent {

  constructor(private dialogref: MatDialogRef<AddblogComponent>,
    private builder: FormBuilder,
    private store: Store<AppStateModel>){

  }
  Closepopup(){
    this.dialogref.close();
  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })

  SaveBlogs(){
    if (this.blogForm.valid) {
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      }
      this.store.dispatch(addblog({bloginput: _bloginput}));
      this.Closepopup();
    }
  }

}


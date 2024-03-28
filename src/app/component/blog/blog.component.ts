import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from '../../shared/store/Blog/blog.model';
import { getblog } from '../../shared/store/Blog/blog.selectors';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppStateModel } from '../../shared/store/Global/AppState.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  
  blogList!: BlogModel[];
  constructor(private store: Store<AppStateModel>) {
    
  }
  ngOnInit(): void {
    this.store.select(getblog).subscribe(item =>{
      this.blogList = item;
      console.log(this.blogList);
    })
  }

}

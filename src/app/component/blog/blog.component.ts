import { BlogModel, Blogs } from './../../shared/store/Blog/blog.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getblog, getblogbyid, getbloginfo } from '../../shared/store/Blog/blog.selectors';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';
import { deleteblog, loadblog } from '../../shared/store/Blog/blog.actions';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatDialogModule, MatIconModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  
  blogList!: BlogModel[];
  bloginfo!: Blogs;
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {
    
  }
  ngOnInit(): void {
    //use effects
    this.store.dispatch(loadblog());
    //
    this.store.select(getbloginfo).subscribe(item =>{
      // this.blogList = item;
      this.bloginfo = item;
    })
  }

  AddBlog(){
    this.OpenPopup(0, 'Addblog');
  }

  OpenPopup(id: any, title:any, isEdit=false){
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit
      }
    })
  }

  EditBlog(id: any){
    this.OpenPopup(id, 'Edit blog', true)
  }

  RemoveBlog(id: any){
    
    if (confirm('Are you sure to delete item')) {
      this.store.dispatch(deleteblog({id: id}))// from this goes to Effect side
    }
  }

}

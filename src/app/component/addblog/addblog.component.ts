import { Component, Inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { BlogModel } from '../../shared/store/Blog/blog.model';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/store/Global/AppState.model';
import { addblog, updateblog } from '../../shared/store/Blog/blog.actions';
import { getblogbyid } from '../../shared/store/Blog/blog.selectors';

@Component({
  selector: 'app-addblog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './addblog.component.html',
  styleUrl: './addblog.component.css'
})
export class AddblogComponent implements OnInit {

  pageTitle='';
  editBlogid=0;
  editdata!: BlogModel;

  constructor(private dialogref: MatDialogRef<AddblogComponent>,
    private builder: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any){

  }
  ngOnInit(): void {
    this.pageTitle = this.data.title;
    if (this.data.isEdit) {
      this.editBlogid = this.data.id;
      this.store.select(getblogbyid(this.editBlogid)).subscribe(_data =>{
        this.editdata = _data;
        this.editForm(this.editdata);
      })
    }
  }
  Closepopup(){
    this.dialogref.close();
  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })

  editForm(data: BlogModel){
    this.blogForm.setValue({
      id: data.id,
      title: data.title,
      description: data.description
    })
  }

  SaveBlogs(){
    if (this.blogForm.valid) {
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      }
      debugger
      if (this.data.isEdit) {
        _bloginput.id = this.blogForm.value.id as number;
        this.store.dispatch(updateblog({bloginput: _bloginput}));
      }else{
        //this.store.dispatch(addblog({bloginput: _bloginput}));
        this.generateAndDispatchAddBlogAction(_bloginput);
      }
      this.Closepopup();
    }
  }

  private generateAndDispatchAddBlogAction(blogInput: BlogModel): void {
    this.store.select(state => state.blog).subscribe((blogs: any) => {
      const maxId = blogs.blogList.reduce((max: any, blog: any) => (blog.id > max ? blog.id : max), 0);
      const newId = maxId + 1;
      const newBlogInput = { ...blogInput, id: newId };
      this.store.dispatch(addblog({ bloginput: newBlogInput }));
    }).unsubscribe();
  }

}


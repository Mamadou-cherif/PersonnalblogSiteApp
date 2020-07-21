import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
 import { BlogService } from 'src/app/services/blog.service';
 import { Post } from 'src/app/models/post';
 import { Subject } from 'rxjs';
 import { takeUntil } from 'rxjs/operators';
 import { SnackbarService } from 'src/app/services/snackbar.service';
 import { ActivatedRoute } from '@angular/router';
 import { AppUser } from 'src/app/models/appuser';
 import { AuthService } from 'src/app/models/services/auth.service';
 import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  blogPost: Post[] = [];
  config: any;
 pageSizeOptions = [];

 appUser: AppUser;

  private unsubscribe$ = new Subject<void>();
  constructor(private blogService: BlogService,private snackBarService: SnackbarService,private route: ActivatedRoute,private authService: AuthService,private commentService: CommentService) { 
    this.pageSizeOptions = [2, 4, 6];
    const pageSize = localStorage.getItem('pageSize');
    this.config = {
    currentPage: 1,
    itemsPerPage: pageSize ? +pageSize : this.pageSizeOptions[0]
    };
    

  } 
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
      this.config.currentPage = +params['pagenum'];
      this.getBlogPosts();
      }
      );


    this.getBlogPosts();
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  getBlogPosts() {
    this.blogService.getAllEducationnalPosts()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(result => {
    this.blogPost = result;
    });
    }
    ngOnDestroy() {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
      }

      delete(postId: string) {
        if (confirm('Are you sure')) {
        this.blogService.deleteEducationPost(postId).then(
        () => {          
          this.commentService.deleteAllCommentForBlog(postId);
        this.snackBarService.showSnackBar('Blog post deleted successfully');
        }
        );
      }
    }


}

import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Post } from 'src/app/models/post';
import { DatePipe } from '@angular/common';
import { BlogService } from 'src/app/services/blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/models/services/auth.service';
import { AppUser } from 'src/app/models/appuser';
import { Observable } from 'rxjs';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-edication-editor',
  templateUrl: './edication-editor.component.html',
  styleUrls: ['./edication-editor.component.scss']
})
export class EdicationEditorComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  public Editor = ClassicEditor;
  ckeConfig: any;
  postData = new Post();
  formTitle = 'Add';
  postId = '';
  appUser: AppUser;

  @Input() file: File;
  task: AngularFireUploadTask;
  snapshot: Observable<any>;
  //downloadURL: string;

  uploadPercent: Observable<number>;
  image: string = null;
  //downloadURL: Observable<String>;

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private blogService: BlogService,
    private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {
    if (this.route.snapshot.params['id']) {
      this.postId = this.route.snapshot.paramMap.get('id');
    }
  }

  ngOnInit() {
    this.setEditorConfig();
    if (this.postId) {
      this.blogService
        .getEducationnalPostbyId(this.postId)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((result) => {
          this.setPostFormData(result);

          this.authService.appUser$.subscribe(
            (appUser) => (this.appUser = appUser)
          );
        });
    }
  }

  setEditorConfig() {
    this.ckeConfig = {
      removePlugins: ['ImageUpload'],
      heading: {
        options: [
          {
            model: 'paragraph',
            title: 'Paragraph',
            class: 'ckheading_paragraph',
          },
          {
            model: 'heading1',
            view: 'h1',
            title: 'Heading 1',
            class: 'ckheading_heading1',
          },
          {
            model: 'heading2',
            view: 'h2',
            title: 'Heading 2',
            class: 'ckheading_heading2',
          },
          {
            model: 'heading3',
            view: 'h3',
            title: 'Heading 3',
            class: 'ckheading_heading3',
          },
          {
            model: 'heading4',
            view: 'h4',
            title: 'Heading 4',
            class: 'ckheading_heading4',
          },
          {
            model: 'heading5',
            view: 'h5',
            title: 'Heading 5',
            class: 'ckheading_heading5',
          },
          {
            model: 'heading6',
            view: 'h6',
            title: 'Heading 6',
            class: 'ckheading_heading6',
          },
          { model: 'Formatted', view: 'pre', title: 'Formatted' },
        ],
      },
    };
  }

 /* saveBlogPost() {
    if ($('#science').is(':checked')) {
      alert('true');

      if (this.postId) {
        this.postData.image = this.image;

        this.blogService.updateSciencePost(this.postId, this.postData).then(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.postData.createdDate = this.datePipe.transform(
          Date.now(),
          'MM-dd-yyyy HH:mm'
        );

        // remplir le champ image de l'objet post
        this.postData.image = this.image;

        this.blogService.createSciencePost(this.postData).then(() => {
          this.router.navigate(['/']);
        });
      }
    } else if ($('#politique').is(':checked')) {
      if (this.postId) {
        this.postData.image = this.image;

        this.blogService
          .updatePoliticalPost(this.postId, this.postData)
          .then(() => {
            this.router.navigate(['/']);
          });
      } else {
        this.postData.createdDate = this.datePipe.transform(
          Date.now(),
          'MM-dd-yyyy HH:mm'
        );

        // remplir le champ image de l'objet post
        this.postData.image = this.image;

        this.blogService.createPolitiquePost(this.postData).then(() => {
          this.router.navigate(['/']);
        });
      }
    } else if ($('#educative').is(':checked')) {
      if (this.postId) {
        this.postData.image = this.image;

        this.blogService
          .updateEducationPost(this.postId, this.postData)
          .then(() => {
            this.router.navigate(['/']);
          });
      } else {
        this.postData.createdDate = this.datePipe.transform(
          Date.now(),
          'MM-dd-yyyy HH:mm'
        );

        // remplir le champ image de l'objet post
        this.postData.image = this.image;

        this.blogService.createEducativePost(this.postData).then(() => {
          this.router.navigate(['/']);
        });
      }
    }


    else if(!$('#educative').is(':checked') && !$('#politique').is(':checked') && !$('#science').is(':checked')){

      if (this.postId) {
        this.postData.image = this.image;

        this.blogService
         .updatePost(this.postId, this.postData)
          .then(() => {
            this.router.navigate(['/']);
          });
      } else {
        this.postData.createdDate = this.datePipe.transform(
          Date.now(),
          'MM-dd-yyyy HH:mm'
        );

        // remplir le champ image de l'objet post
        this.postData.image = this.image;

        this.blogService.createPost(this.postData).then(() => {
          this.router.navigate(['/']);
        });
      }

    }
  }*/

  saveBlogPost() {
    if ($('#science').is(':checked')) {
      if (this.postId) {

       
        this.postData.createdDate = this.datePipe.transform(
          Date.now(),
          'MM-dd-yyyy HH:mm'
        );

        // remplir le champ image de l'objet post
        this.postData.image = this.image;

        this.blogService.createSciencePost(this.postData).then(() => {
          this.router.navigate(['/']);
        });



      } 
    }
    else if($('#politique').is(':checked')){

      if (this.postId) {
        
        this.postData.createdDate = this.datePipe.transform(
          Date.now(),
          'MM-dd-yyyy HH:mm'
        );
  
        // remplir le champ image de l'objet post
        this.postData.image = this.image;
  
        this.blogService.createPolitiquePost(this.postData).then(() => {
          this.router.navigate(['/']);
        });
      }
    

    }
    else if ($('#educative').is(':checked')){
      if (this.postId) {
        
        this.postData.image = this.image;

        this.blogService.updateEducationPost(this.postId, this.postData).then(() => {
          this.router.navigate(['/']);
        });
      }
      else{
      this.postData.createdDate = this.datePipe.transform(
        Date.now(),
        'MM-dd-yyyy HH:mm'
      );

      // remplir le champ image de l'objet post
      this.postData.image = this.image;

      this.blogService.createEducativePost(this.postData).then(() => {
        this.router.navigate(['/']);
      });
    }
    }
    else{

      if (this.postId) {
        this.postData.createdDate = this.datePipe.transform(
          Date.now(),
          'MM-dd-yyyy HH:mm'
        );

        // remplir le champ image de l'objet post
        this.postData.image = this.image;

        this.blogService.createPost(this.postData).then(() => {
          this.router.navigate(['/']);
        });
      } 

    }
  }



  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  cancel() {
    this.router.navigate(['/']);
  }

  setPostFormData(postFormData) {
    this.postData.title = postFormData.title;
    this.postData.content = postFormData.content;
  }

  uploadImage() {}
  downloadURL: Observable<string>;

  startUpload(event) {
    const file = event.target.files[0];
    // The storage path
    const path = `test/${file.name}`;

    // Reference to storage bucket

    const task = this.storage.upload(path, file);
    const ref = this.storage.ref(path);
    //  this.uploadPercent = task.percentageChanges();
    console.log('Image uploaded!');
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL();
          this.downloadURL.subscribe((url) => (this.image = url));
          //this.db.collection('blogs').add( { downloadURL: this.downloadURL, path });
        })
      )
      .subscribe();
  }
}

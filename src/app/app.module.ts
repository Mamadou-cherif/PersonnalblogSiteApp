import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
 import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { ExcerptPipe } from './customPipes/excerpt.pipe';
import { SlugPipe } from './customPipes/slug.pipe';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogComponent } from './components/blog/blog.component';  
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthorProfileComponent } from './components/author-profile/author-profile.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ShareButtonsConfig, ShareModule } from '@ngx-share/core';
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 import { HttpClientModule } from '@angular/common/http';
import { SocialShareComponent } from './components/social-share/social-share.component';
import { DatePipe } from '@angular/common';
import { AngularFireStorageModule ,AngularFireStorage } from 'angularfire2/storage';
import { FooterComponent } from './components/footer/footer.component';
import { ScienceComponent } from './components/science/science.component';
import { EducationComponent } from './components/education/education.component';
import { PolitiqueComponent } from './components/politique/politique.component';
import { PolitiqueEditorComponent } from './components/politique/politique-editor/politique-editor.component';
import { EdicationEditorComponent } from './components/education/edication-editor/edication-editor.component';
import { ViewMorePolitiqueComponent } from './components/politique/view-more-politique/view-more-politique.component';
import { ViewMoreEducationComponent } from './components/education/view-more-education/view-more-education.component';
import { ViewMoreScienceComponent } from './components/science/view-more-science/view-more-science.component';
import { ScienceEditorComponent } from './components/science/science-editor/science-editor.component';
import { ImageHomeComponent } from './components/image-home/image-home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

 const customConfig: ShareButtonsConfig = {
  twitterAccount: 'Mamadoucherifb3'
  };

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogEditorComponent,
    ExcerptPipe,
    SlugPipe,
    BlogCardComponent,
    BlogComponent,
    PaginatorComponent,
    AuthorProfileComponent,
    ScrollerComponent,
    CommentsComponent,
    SocialShareComponent,
    FooterComponent,
    ScienceComponent,
    EducationComponent,
    PolitiqueComponent,
    PolitiqueEditorComponent,
    EdicationEditorComponent,
    ViewMorePolitiqueComponent,
    ViewMoreEducationComponent,
    ViewMoreScienceComponent,
    ScienceEditorComponent,
    ImageHomeComponent,

  ],
  imports: [
    AngularFireStorageModule,
    HttpClientModule,
    FontAwesomeModule,
    ShareModule.withConfig(customConfig),
    CKEditorModule,
    FormsModule, 
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'addpost', component: BlogEditorComponent,  canActivate: [AuthGuard] },
      { path: 'blog/:id/:slug', component: BlogComponent },
      { path: 'editpost/:id', component: BlogEditorComponent,  canActivate: [AdminAuthGuard] },
      { path: 'page/:pagenum', component: HomeComponent },
      { path:'science' , component: ScienceComponent},
      { path: 'education', component:EducationComponent},
      { path: 'politique', component: PolitiqueComponent},
      { path: 'editpolitiquepost/:id', component:PolitiqueEditorComponent},
      { path: 'editeducationpost/:id', component:EdicationEditorComponent},
      { path: 'viewMorePolitique/:id/:slug', component:ViewMorePolitiqueComponent},
      { path: 'viewMoreEducation/:id/:slug' , component:ViewMoreEducationComponent},
      { path: 'viewMoreScience/:id/:slug', component: ViewMoreScienceComponent},
      { path: 'editSciencePost/:id', component:ScienceEditorComponent}

      ]),
      
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

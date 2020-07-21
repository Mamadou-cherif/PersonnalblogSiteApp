import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private db: AngularFirestore) {}
  /* *****************************************************************************************************/

  //                                                                                                     //
  //          CETTE PARTIE CONCERNE LA "LOGIQUE METIER" DE LA COLLECTION "blogs"(située dans la DB)      //
  //                                                                                                     //
  /* *****************************************************************************************************/

  createPost(post: Post) {
    const postData = JSON.parse(JSON.stringify(post));

    return this.db.collection('blogs').add(postData);
  }

  getAllPosts(): Observable<Post[]> {
    const blogs = this.db
      .collection<Post>('blogs', (ref) => ref.orderBy('createdDate', 'desc'))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((c) => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data(),
          }));
        })
      );
    return blogs;
  }
  getPostbyId(id: string): Observable<Post> {
    const blogDetails = this.db.doc<Post>('blogs/' + id).valueChanges();
    return blogDetails;
  }

  deletePost(postId: string) {
    return this.db.doc('blogs/' + postId).delete();
  }

  updatePost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));

    return this.db.doc('blogs/' + postId).update(putData);
  }

  /*    FIN DE LA SECTION "blogs"  */

  /* *****************************************************************************************************/

  //                                                                                                       //
  //          CETTE PARTIE CONCERNE LA "LOGIQUE METIER" DE LA COLLECTION "politique"(située dans la DB)   //
  //                                                                                                      //
  /* *****************************************************************************************************/

  createPolitiquePost(post: Post) {
    const postData = JSON.parse(JSON.stringify(post));

    return this.db.collection('politique').add(postData);
  }

  getAllPolitiquePosts(): Observable<Post[]> {
    const blogs = this.db
      .collection<Post>('politique', (ref) =>
        ref.orderBy('createdDate', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((c) => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data(),
          }));
        })
      );
    return blogs;
  }

  updatePoliticalPost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));

    return this.db.doc('politique/' + postId).update(putData);
  }

  setPoliticalPost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));

    return this.db.doc('politique/' + postId).set(putData);
  }



  deletePoliticalPost(postId: string) {
    return this.db.doc('politique/' + postId).delete();
  }

  getPolitcalPostbyId(id: string): Observable<Post> {
    const blogDetails = this.db.doc<Post>('politique/' + id).valueChanges();
    return blogDetails;
  }

  /*                    FIN 'politique' IMPLEMENTATION                                   */

  /* *****************************************************************************************************/

  //                                                                                                       //
  //          CETTE PARTIE CONCERNE LA "LOGIQUE METIER" DE LA COLLECTION "education"(située dans la DB)   //
  //                                                                                                      //
  /* *****************************************************************************************************/

  createEducativePost(post: Post) {
    const postData = JSON.parse(JSON.stringify(post));

    return this.db.collection('education').add(postData);
  }

  getEducationnalPostbyId(id: string): Observable<Post> {
    const blogDetails = this.db.doc<Post>('education/' + id).valueChanges();
    return blogDetails;
  }

  getAllEducationnalPosts(): Observable<Post[]> {
    const blogs = this.db
      .collection<Post>('education', (ref) =>
        ref.orderBy('createdDate', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((c) => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data(),
          }));
        })
      );
    return blogs;
  }

  updateEducationPost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));

    return this.db.doc('education/' + postId).update(putData);
  }

  deleteEducationPost(postId: string) {
    return this.db.doc('education/' + postId).delete();
  }

  /*                   FIN DE L'IMPLEMENTATION DE LA LOGIQUE METIER DE LA COLLECTION 'education'                                                               */

  /* *****************************************************************************************************/

  //                                                                                                       //
  //          CETTE PARTIE CONCERNE LA "LOGIQUE METIER" DE LA COLLECTION "science"(située dans la DB)   //
  //                                                                                                      //
  /* *****************************************************************************************************/

  createSciencePost(post: Post) {
    const postData = JSON.parse(JSON.stringify(post));

    return this.db.collection('science').add(postData);
  }

  updateSciencePost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));

    return this.db.doc('science/' + postId).update(putData);
  }

  setSciencePost(postId: string, post: Post) {
    const putData = JSON.parse(JSON.stringify(post));

    return this.db.doc('science/' + postId).set(putData);
  }

  getSciencePostbyId(id: string): Observable<Post> {
    const blogDetails = this.db.doc<Post>('science/' + id).valueChanges();
    return blogDetails;
  }

  getAllSciencePosts(): Observable<Post[]> {
    const blogs = this.db
      .collection<Post>('science', (ref) => ref.orderBy('createdDate', 'desc'))
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((c) => ({
            postId: c.payload.doc.id,
            ...c.payload.doc.data(),
          }));
        })
      );
    return blogs;
  }

  deleteSciencePost(postId: string) {
    return this.db.doc('science/' + postId).delete();
  }
}

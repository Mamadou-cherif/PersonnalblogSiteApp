import { Injectable } from '@angular/core';
import { AppUser } from '../appuser';
 import { Observable, of } from 'rxjs';
 import { ActivatedRoute, Router } from '@angular/router';
 import { AngularFirestore } from '@angular/fire/firestore';
 import { switchMap } from 'rxjs/operators';
 import * as firebase from 'firebase/app';
 //import { AngularFireAuth } from 'angularfire2/auth'
 import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  appUser$: Observable<AppUser>;

  constructor(private afAuth: AngularFireAuth,private route: ActivatedRoute,private router: Router,private db: AngularFirestore) { 
    this.appUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
      if (user) {
      return this.db.doc<AppUser>(`appusers/${user.uid}`).valueChanges();
      } else {
      return of(null);
      }
      })
      );

      

  }

  private updateUserData(user) {
    const userRef = this.db.doc(`appusers/${user.uid}`);
    const data = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
    }

    async login() {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
     || this.router.url;
      localStorage.setItem('returnUrl', returnUrl);
      const credential = await this.afAuth.signInWithPopup(new
     firebase.auth.GoogleAuthProvider());
      return this.updateUserData(credential.user);
      }
   /* Au tout debut un '.auth' etait placé entre afAuth et signout() ET aussi dans la methode d'en bas 
   et entre 'this' et 'signInWithPopup'*/ 
      async logout() {
        await this.afAuth.signOut().then(() => {
        this.router.navigate(['/']);
        });
        }
}
 
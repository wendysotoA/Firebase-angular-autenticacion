import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import{AngularFireAuth} from "@angular/fire/auth";
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {
  email:string;
  password:string;
  constructor(private fAuth:AngularFireAuth, public router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.fAuth.authState.pipe(map(auth=> {
        if (isNullOrUndefined(auth)){
          console.log("no esta logeado, Ckeckoutguard")
          this.router.navigate(['/login']);
          return false
        }else{

          console.log("esta logeado redirija al dashboard check")

          return true;
        }
      }))


      }
}


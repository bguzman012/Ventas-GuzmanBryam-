import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from 'src/app/model/Usuario';
import { ServicioCroodService } from '../servicio-crood.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {

  usuarios: Observable<any[]>;
  usuario: Usuario = new Usuario();
  igual: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,public serviciosCrood: ServicioCroodService) { }

  ngOnInit() {
  }
  doLogin(){
    
    this.usuarios = this.serviciosCrood.getUsuarios()
    this.usuarios.forEach(element => {
      for (let index = 0; index < element.length; index++) {
        const usuario = element[index];
        if (usuario.correo == this.usuario.correo && usuario.password == this.usuario.password) {
          this.igual = true
          this.usuario.id = usuario.id
          break
        }
        
      }
    });

    if(this.igual){
      const url = '/inicio-page/' + this.usuario.id
      this.router.navigate([url]); 
    }
  }

}

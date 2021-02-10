import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from 'src/app/model/Usuario';
import { ServicioCroodService } from '../servicio-crood.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private route: ActivatedRoute, private router: Router,public serviciosCrood: ServicioCroodService) { }

  ngOnInit() {
  }

  doLogin(){
    this.serviciosCrood.saveContacto(this.usuario)
    const url = '/inicio-page/' + this.usuario.id
    this.router.navigate([url]); 
  }

}

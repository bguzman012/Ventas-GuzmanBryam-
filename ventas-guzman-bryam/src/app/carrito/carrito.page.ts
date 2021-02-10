import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from 'src/app/model/Usuario';
import { Producto } from 'src/app/model/Producto';
import { ServicioCroodService } from '../servicio-crood.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  carritos: Observable<any[]>
  id_user: string

  constructor(private route: ActivatedRoute, private router: Router,public serviciosCrood: ServicioCroodService) { }

  ngOnInit() {
    this.id_user = this.route.snapshot.paramMap.get('id');
    this.carritos = this.serviciosCrood.getCarritoByUsuario(this.id_user)
  }

  vaciar(){
    this.serviciosCrood.vaciarCarrito(this.id_user)
  }
/**
  llamar(){
    
    this.callNumber.callNumber("0968420404", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
 */
}

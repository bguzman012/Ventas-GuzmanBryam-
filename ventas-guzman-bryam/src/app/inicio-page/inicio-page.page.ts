import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from 'src/app/model/Usuario';
import { Producto } from 'src/app/model/Producto';
import { ServicioCroodService } from '../servicio-crood.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.page.html',
  styleUrls: ['./inicio-page.page.scss'],
})
export class InicioPagePage implements OnInit {

  productos: Observable<any[]>
  idUsuario: string
  idUsuarioCarrito:string

  constructor(private route: ActivatedRoute, private router: Router,public serviciosCrood: ServicioCroodService) { }

  ngOnInit() {
    this.productos = this.serviciosCrood.getProductos()
  }
  tomarProductoById(id:string){
    this.idUsuario = this.route.snapshot.paramMap.get('id'); 

    console.log(id)
    const url = '/producto/' + this.idUsuario + "/" + id;
    console.log(url);
    this.router.navigate([url]); 


  }

  redirigirCarrito(){
    this.idUsuarioCarrito = this.route.snapshot.paramMap.get('id'); 
    const url = '/carrito/' + this.idUsuarioCarrito
    this.router.navigate([url]); 

  }

}

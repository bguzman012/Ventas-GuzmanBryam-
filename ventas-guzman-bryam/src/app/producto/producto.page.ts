import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from 'src/app/model/Usuario';
import { Producto } from 'src/app/model/Producto';
import { ServicioCroodService } from '../servicio-crood.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  producto: Producto = new Producto()
  usuario: Usuario = new Usuario()
  id: string
  id_user: string

  constructor(private route: ActivatedRoute, private router: Router,
    public servicioCrood:ServicioCroodService
) {
  this.id = this.route.snapshot.paramMap.get('id_producto'); 
    console.log(this.id)
    this.servicioCrood.getProductoById(this.id).subscribe(data => {
      console.log(data)
      const aux:any = data
        
      this.producto = aux[0];
        });
    this.id_user = this.route.snapshot.paramMap.get('id_usuario'); 
    console.log(this.id)
    this.servicioCrood.getUsuarioById(this.id_user).subscribe(data => {
      console.log(data)
      const aux:any = data
        
      this.usuario = aux[0];
        });

   }

  ngOnInit() {
  }

  guardar(){
    this.servicioCrood.añadirCarrito(this.usuario,this.producto)
    const url = '/inicio-page/' + this.usuario.id
    this.router.navigate([url]); 


  }

}

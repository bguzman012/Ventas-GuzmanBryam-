import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from 'src/app/model/Usuario';
import { Carrito } from 'src/app/model/Carrito';
import { Observable } from 'rxjs';
import { Producto } from './model/Producto';
@Injectable({
  providedIn: 'root'
})
export class ServicioCroodService {
  carrito: Carrito = new Carrito()
  carritos: Observable<any[]>;

  constructor(public afs: AngularFirestore) { }
  saveContacto(usuario:Usuario){
    const refContacto = this.afs.collection("usuarios");
    if(usuario.id==null){
      usuario.id = this.afs.createId();
    }
      

    refContacto.doc(usuario.id).set(Object.assign({}, usuario), { merge: true})
  }
  
getUsuarios(): Observable<any[]>{
  return this.afs.collection("usuarios").valueChanges();
}
getProductos(): Observable<any[]>{
  return this.afs.collection("productos").valueChanges();
}
getProductoById(uid: string) :Observable<any>{
  return this.afs.collection("productos", 
          ref => ref.where('id', '==', uid))
                    .valueChanges();
}
getUsuarioById(uid: string) :Observable<any>{
  return this.afs.collection("usuarios", 
          ref => ref.where('id', '==', uid))
                    .valueChanges();
}

getCarritoByUsuario(uid: string) :Observable<any>{
  return this.afs.collection("carritos", 
          ref => ref.where('id_cliente', '==', uid))
                    .valueChanges();
}

añadirCarrito(usuario:Usuario, producto: Producto){
  this.carrito = new Carrito()
  const refContacto = this.afs.collection("carritos");
    if(this.carrito.id==null){
      this.carrito.id = this.afs.createId();
      this.carrito.id_cliente = usuario.id
      this.carrito.id_producto = producto
    }
    refContacto.doc(this.carrito.id).set(Object.assign({}, this.carrito), { merge: true})
}
vaciarCarrito(id_clienta:string){
  this.carritos = this.getCarritoByUsuario(id_clienta)
    this.carritos.forEach(element => {
      for (let index = 0; index < element.length; index++) {
        const usuario = element[index];
        const refContacto = this.afs.collection("carritos");
        refContacto.doc(usuario.id).delete()
      }
    });
}


}



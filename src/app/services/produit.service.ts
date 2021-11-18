import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
providedIn: 'root'
})
export class ProduitService {


    apiURL: string = 'http://localhost:8080/produits/api';
    


produits : Produit[]; //un tableau de Produit
produit : Produit;

constructor(private http : HttpClient) {
}
/*constructor() {
this.produits = [
{ idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation
: new Date("01/14/2011")},
{ idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
{ idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
];}*/


/*
listeProduits():Produit[] {
  return this.produits;
}*/

listeProduit(): Observable<Produit[]>{
return this.http.get<Produit[]>(this.apiURL);
}

/*ajouterProduit( prod: Produit){
this.produits.push(prod);
}*/

ajouterProduit( prod: Produit):Observable<Produit>{
  return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }


  supprimerProduit(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }


  /*
supprimerProduit( prod: Produit){
  //supprimer le produit prod du tableau produits
  const index = this.produits.indexOf(prod, 0);
  if (index > -1) {
  this.produits.splice(index, 1);
  }*/
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  
  /*consulterProduit(id:number): Produit{
    this.produit = this.produits.find(p => p.idProduit == id);
     return this.produit;
    }*/

    consulterProdui(id: number): Observable<Produit> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Produit>(url);
      }
  

    trierProduits(){
      this.produits = this.produits.sort((n1,n2) => {
      if (n1.idProduit > n2.idProduit) {
      return 1;
      }
      if (n1.idProduit < n2.idProduit) {
      return -1;
      }
      return 0;
      });
      }

    /*updateProduit(p:Produit)
    {
    // console.log(p);
    // this.supprimerProduit(p);
    // this.ajouterProduit(p);
    // this.trierProduits();
    }*/

    updateProduit(prod :Produit) : Observable<Produit>
    {
    return this.http.put<Produit>(this.apiURL, prod, httpOptions);
    }
    
    
}
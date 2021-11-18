import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: []
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private produitService: ProduitService) { }

  
  /*ngOnInit(): void {
    //ngOnInit() {
    // console.log(this.route.snapshot.params.id);
  this.currentProduit = this.produitService.
  consulterProduit(this.activatedRoute.snapshot.params.id);
  console.log(this.currentProduit);
  }*/

  ngOnInit() {
    this.produitService.consulterProdui(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentProduit = prod; } ) ;
    }

 /* updateProduit() {
 //console.log(this.currentProduit);
 this.produitService.updateProduit(this.currentProduit);
 this.router.navigate(['produits']);

}*/
updateProduit() {
  this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
  this.router.navigate(['produits']);
  },(error) => { alert("Problème lors de la modification !"); }
  );
  }

}

import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html'
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();

  message :string;

  constructor(private produitService : ProduitService,
              private router : Router
    ) { }

  ngOnInit(): void {
  }
/*
  addProduit(){
    //console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message = "Produit " + this.newProduit.nomProduit + "ajoute avec succès ";

    }*/

    addProduit(){
      this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
      console.log(prod);
      });
      
      this.router.navigate(['produits']).then(() => {
        window.location.reload();
        });

}
}
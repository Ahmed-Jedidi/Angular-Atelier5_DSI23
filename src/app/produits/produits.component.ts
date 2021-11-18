import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {
  produits : Produit[]; //un tableau de chînes de caractères
  constructor(private produitService: ProduitService,
    private router : Router
    ) { 
    //this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
  }


  /*supprimerProduit(prod: Produit)
{
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  //console.log(prod);
  this.produitService.supprimerProduit(prod);

}*/

  supprimerProduit(p: Produit)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
  console.log("produit supprimé");
  /*});
  this.router.navigate(['produits']).then(() => {
  window.location.reload();*/
  this.SuprimerProduitDuTableau(p);
  });
  }

  SuprimerProduitDuTableau(prod : Produit) {
    this.produits.forEach((cur, index) => {
    if(prod.idProduit=== cur.idProduit) {
    this.produits.splice(index, 1);
    }
    });
    }
  }


import { Component, OnInit } from '@angular/core';

interface Produtos {
  nome: string;
  descricao: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  produtos: Produtos[] = [];

  ngOnInit(): void {}

  recebeProduto(produto: Produtos) {
   this.produtos.push({
      nome: produto.nome,
      descricao: produto.descricao,
    });
    const products = JSON.stringify(this.produtos);
    localStorage.setItem('products', products);

  }


}

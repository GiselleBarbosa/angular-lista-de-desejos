import { Component, OnInit } from '@angular/core';

interface Produtos {
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public produtos: Produtos[] = [];

  public ngOnInit(): void {
    // recuperando lista de localstorage

    const productsSaved = localStorage.getItem('products');

    if (productsSaved) this.produtos = JSON.parse(productsSaved);
  }

  public produtoCriado(produto: Produtos) {
    this.produtos.push({
      nome: produto.nome,
      preco: produto.preco,
    });

    // salvando lista em localstorage
    const products = JSON.stringify(this.produtos);
    localStorage.setItem('products', products);
  }
}

import { Component, OnInit } from '@angular/core';

import { Produtos } from './shared/productos.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="container mt-5">
      <ng-container>
        <h3>❤️ Lista de Desejos</h3>
        <app-criar-produto (produtoCriado)="CriarProduto($event)" />
        <hr />
      </ng-container>

      <ng-container *ngIf="produtos.length > 0">
        <div class="row">
          <div class="col-12">
            <h4>🎁 Produtos salvos</h4>
            <hr />

            <div class="container-fluid">
              <ng-container *ngFor="let produto of produtos; let i = index">
                <app-detalhe-produto
                  (removerProduto)="removerProduto(i)"
                  [produto]="produto"
                />
              </ng-container>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
  `,
})
export class AppComponent implements OnInit {
  public produtos: Produtos[] = [];

  public ngOnInit(): void {
    // recuperando lista de localstorage
    const productsSaved = localStorage.getItem('products');

    if (productsSaved) this.produtos = JSON.parse(productsSaved);
  }

  public CriarProduto(produto: Produtos) {
    this.produtos.push({
      nome: produto.nome,
      preco: produto.preco,
    });

    const products = JSON.stringify(this.produtos);
    localStorage.setItem('products', products);
    location.reload();
  }

  removerProduto(index: number): void {
    if (index >= 0 && index < this.produtos.length) {
      this.produtos.splice(index, 1);
      console.log(this.produtos);
      const listaProdutosAtualizada = JSON.stringify(this.produtos);
      
      localStorage.setItem('products', listaProdutosAtualizada);
      console.log('removeu', index);
    }
  }
}

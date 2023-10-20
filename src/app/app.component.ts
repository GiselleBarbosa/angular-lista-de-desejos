import { Component, OnInit } from '@angular/core';

import { Produtos } from './shared/productos.interface';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { NgIf, NgFor } from '@angular/common';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
    <div class="container mt-5 mb-5">
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
                  (concluido)="marcarProdutoComoComprado(i)"
                />
              </ng-container>
            </div>
          </div>
        </div>
      </ng-container>
    </div>
  `,
    standalone: true,
    imports: [
        CriarProdutoComponent,
        NgIf,
        NgFor,
        DetalheProdutoComponent,
    ],
})
export class AppComponent implements OnInit {
  public produtos: Produtos[] = [];

  public comprado = false;

  public ngOnInit(): void {
    // recuperando lista de localstorage
    const productsSaved = localStorage.getItem('products');

    if (productsSaved) this.produtos = JSON.parse(productsSaved);
  }

  public CriarProduto(produto: Produtos) {
    this.produtos.push({
      nome: produto.nome,
      preco: produto.preco,
      comprado: this.comprado,
    });

    const products = JSON.stringify(this.produtos);
    localStorage.setItem('products', products);
    location.reload();
  }

  removerProduto(index: number): void {
    if (index >= 0 && index < this.produtos.length) {
      this.produtos.splice(index, 1);

      const listaProdutosAtualizada = JSON.stringify(this.produtos);
      localStorage.setItem('products', listaProdutosAtualizada);
    }
  }

  public marcarProdutoComoComprado(index: number) {
    if (index >= 0 && index < this.produtos.length) {
      this.comprado = !this.comprado;
    }

    const produtoAtualizado = JSON.stringify(this.produtos);
    localStorage.setItem('products', produtoAtualizado);
  }
}

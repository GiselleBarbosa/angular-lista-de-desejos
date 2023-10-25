import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { FooterComponent } from './shared/layout/footer/footer/footer.component';
import { Produtos } from './shared/productos.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CriarProdutoComponent,
    NgIf,
    NgFor,
    DetalheProdutoComponent,
    FooterComponent,
  ],
  template: `
    <ng-container>
      <div class="flex flex-column align-items-center p-4">
        <ng-container>
          <app-criar-produto (produtoCriado)="CriarProduto($event)" />
        </ng-container>

        <ng-container *ngIf="produtos.length > 0">
          <ng-container *ngFor="let produto of produtos; let i = index">
            <app-detalhe-produto
              (removerProduto)="removerProduto(i)"
              [produto]="produto"
              (concluido)="marcarProdutoComoComprado(i)"
            />
          </ng-container>
        </ng-container>
        <app-footer />
      </div>
    </ng-container>
  `,
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

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss'],
})
export class CriarProdutoComponent {
  @Output() public produtoCriado = new EventEmitter<{
    nome: string;
    preco: number;
  }>();

  novoProduto!: string;
  precoNovoProduto!: number;

  public criarProduto() {
    this.produtoCriado.emit({
      nome: this.novoProduto,
      preco: this.precoNovoProduto,
    });
  }
}

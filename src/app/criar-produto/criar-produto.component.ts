import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss']
})
export class CriarProdutoComponent implements OnInit {
  @Output() produtoCriado = new EventEmitter<{ nome: string, descricao: string }>();
  novoProduto = "";
  descricaoNovoProduto = "";

  constructor() {
  }

  criarProduto() {
    this.produtoCriado.emit({
      nome: this.novoProduto,
      descricao: this.descricaoNovoProduto
    })
  }

  ngOnInit(): void { }
}
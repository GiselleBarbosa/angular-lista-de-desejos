import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.scss']
})
export class DetalheProdutoComponent implements OnInit {
  @Input() produto!: { nome: string, descricao: string };
  constructor() { }

  ngOnInit(): void {
    console.log(this.produto)
  }
}
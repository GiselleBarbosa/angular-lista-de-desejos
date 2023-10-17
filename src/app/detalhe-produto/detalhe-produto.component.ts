import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.scss'],
})
export class DetalheProdutoComponent {
  @Input() public produto!: { nome: string; preco: number };
}

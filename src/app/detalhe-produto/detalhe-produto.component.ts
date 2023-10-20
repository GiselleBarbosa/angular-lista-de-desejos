import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-detalhe-produto',
    template: `
    <div class="card mb-3">
      <div class="card-header">
        <input
          class="mr-2"
          type="checkbox"
          [(ngModel)]="produto.comprado"
          (click)="marcarProdutoComoComprado()"
        />
        {{ produto.nome }}
      </div>
      <div
        class="card-text d-flex flex-row justify-content-between align-content-center align-items-center p-2"
      >
        <div>
          <p class="mb-0">{{ produto.preco | currency : 'BRL' }}</p>
        </div>
        <div>
          <button
            class="btn btn-danger  btn-sm"
            (click)="removerProdutoEvento()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-trash3-fill"
              viewBox="0 0 14 16"
            >
              <path
                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
    standalone: true,
    imports: [FormsModule, CurrencyPipe],
})
export class DetalheProdutoComponent {
  @Input() public produto!: {
    nome: string;
    preco: number;
    comprado?: boolean;
  };

  @Input() public comprado = false;

  @Output() public removerProduto = new EventEmitter();

  @Output() public concluido = new EventEmitter<boolean>();

  public removerProdutoEvento() {
    this.removerProduto.emit();
  }

  public marcarProdutoComoComprado() {
    this.concluido.emit(this.comprado);
  }
}

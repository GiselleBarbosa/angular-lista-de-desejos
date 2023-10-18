import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-criar-produto',
  template: `
    <div class="row">
      <div class="col-12 mt-2 d-flex flex-column">
        <form>
          <div class="mt-4 mb-4 ">
            <label>Nome do Produto</label>
            <input
              required
              type="text"
              class="form-control"
              name="inputNovoProduto"
              placeholder="Digite o nome do produto"
              [(ngModel)]="produto"
            />

            <div class="mt-3">
              <label>Preço</label>
              <input
                required
                type="number"
                placeholder="Digite o preço"
                class="form-control"
                name="inputDetalhesDoProduto"
                [(ngModel)]="preco"
              />
            </div>
          </div>
          <button class="btn btn-primary btn-sm" (click)="criarProduto()">
            Salvar produto
          </button>
        </form>
      </div>
    </div>
  `,
})
export class CriarProdutoComponent {
  @Output() public produtoCriado = new EventEmitter<{
    nome: string;
    preco: number;
  }>();

  produto!: string;
  preco!: number;

  public criarProduto() {
    if (this.produto !== null && this.preco !== null) {
      this.produtoCriado.emit({
        nome: this.produto,
        preco: this.preco,
      });
    }
  }
}

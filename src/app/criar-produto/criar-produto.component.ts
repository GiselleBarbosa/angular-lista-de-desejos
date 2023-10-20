import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm, Validator, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-criar-produto',
    template: `
    <div class="row">
      <div class="col-12 mt-2 d-flex flex-column">
        <form
          #productsForm="ngForm"
          (ngSubmit)="criarProduto(productsForm)"
          class="needs-validation"
          novalidate
        >
          <div class="mt-4 mb-4 position-relative">
            <label>Nome do Produto</label>
            <input
              for="validationTooltip01"
              id="validationTooltip01"
              required
              type="text"
              class="form-control"
              name="inputNovoProduto"
              placeholder="Digite o nome do produto"
              [(ngModel)]="produto"
            />
            <div class="invalid-feedback">verifique os campos</div>

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
          <button class="btn btn-primary" type="submit">Salvar produto</button>
        </form>
      </div>
    </div>
  `,
    standalone: true,
    imports: [FormsModule],
})
export class CriarProdutoComponent {
  @Output() public produtoCriado = new EventEmitter<{
    nome: string;
    preco: number;
  }>();

  public produto!: string;
  public preco!: number;

  public validaCampos(): boolean {
    if (this.produto && this.preco !== null && undefined) {
      return true;
    }
    return false;
  }

  public criarProduto(form: NgForm) {
    if (form.valid) {
      this.produtoCriado.emit({
        nome: this.produto,
        preco: this.preco,
      });
    } else {
      alert('Verifique os campos');
    }
  }
}

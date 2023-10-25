import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-criar-produto',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, CardModule],
  template: `
    <h2 class="mb-3">❤️ Lista de Desejos</h2>
    <p-card>
      <div class="p-5 mt-4 max-w-min md:max-w-max ">
        <form #productsForm="ngForm" (ngSubmit)="criarProduto(productsForm)">
          <label class="flex flex-column gap-2"
            >Nome do Produto

            <input
              pInputText
              for="inputNovoProduto"
              id="inputNovoProduto"
              name="inputNovoProduto"
              type="text"
              [(ngModel)]="produto"
              placeholder="Digite o nome"
              required
            />
          </label>

          <div class="mt-3">
            <label class="flex flex-column gap-2"
              >Preço

              <input
                pInputText
                for="inputPreco"
                id="inputPreco"
                name="inputPreco"
                type="text"
                [(ngModel)]="preco"
                placeholder="Digite o preço"
                required
              />
            </label>
          </div>

          <div class="flex justify-content-center w-full">
            <button
              pButton
              pRipple
              label="Salvar"
              class="p-button-lg mt-4 w-full "
            ></button>
          </div>
        </form>
      </div>
    </p-card>
  `,
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

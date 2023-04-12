import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CriarProdutoComponent, DetalheProdutoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

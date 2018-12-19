import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ShelfComponent } from './shelf/shelf.component';

import { HeaderComponent, TablesComponent } from '../shared';

@NgModule({
  declarations: [
    MainComponent,
    ProductComponent,
    ShelfComponent,
    LayoutComponent,
    HeaderComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { environment } from '../environments/environment';
import { UserComponent } from './user/user.component';
import { LodowkaComponent } from './lodowka/lodowka.component';
import { HttpClientModule } from '@angular/common/http';

import { AddProductComponent } from './modals/add-product/add-product.component';
import { AddProductButtonComponent } from './lodowka/add-product-button/add-product-button.component';
import { ProductComponent } from './lodowka/product/product.component';
import { ProductDetaleComponent } from './modals/product-detale/product-detale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabelaComponent } from './tabela/tabela.component';
import { FiltersSidebarComponent } from './tabela/filters-sidebar/filters-sidebar.component';
import { FiltersOptionsComponent } from './tabela/filters-options/filters-options.component';
import { ColumnsFiltersComponent } from './tabela/columns-filters/columns-filters.component';
import { FiltersButtonComponent } from './tabela/filters-button/filters-button.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LodowkaComponent,
    AddProductComponent,
    AddProductButtonComponent,
    ProductComponent,
    ProductDetaleComponent,
    TabelaComponent,
    FiltersSidebarComponent,
    FiltersOptionsComponent,
    ColumnsFiltersComponent,
    FiltersButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

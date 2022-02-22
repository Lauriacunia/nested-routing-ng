import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProductsComponent } from './products/products.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    /** Nested Routes -> children */
    { path: 'home', component: HomeComponent,
      children: [
      { path: '', component: ProductsComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'my-cart', component: MyCartComponent }
      ]  
    },
    /** Pendiente abrir tarjeta detalle de producto */
    { path: 'product/:id', component: ProductDetailComponent },
  
    /** Help es un modulo dentro de app module */
    { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

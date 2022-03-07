import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ContentComponent } from './components/content/content.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'content', component:ContentComponent},
  {path:'addItem', component:AddItemComponent},
  {path:'dialog', component:DialogComponent},
  {path:'productList', component:ProductListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

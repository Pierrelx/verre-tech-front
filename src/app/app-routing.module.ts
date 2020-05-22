import { ListComponent } from './pages/store/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './pages/store/store/store.component';


const routes: Routes = [
  {path: 'store/:id', component: StoreComponent},
  {path: 'stores', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { DetailsComponent } from './components/main-content/details/details.component';

const routes: Routes = [
  { path: '', component: MainContentComponent},
  { path: 'detalhes/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

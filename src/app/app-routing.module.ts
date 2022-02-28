import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
const routes: Routes = [{ path: 'heroes', component: HeroesComponent }];
//BEst pratice to put route file in seperate page like this and than just export RouterModule
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], // Export because this is needed when this file is imported inside app.module.ts to be able to fully connect routing
})
export class AppRoutingModule {}

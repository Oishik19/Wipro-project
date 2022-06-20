import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApplicationComponent } from './application/application.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HompageComponent } from './hompage/hompage.component';
import { LoantrackerComponent } from './loantracker/loantracker.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
const routes: Routes = [
  {path:'home',component:HompageComponent},
  {path:'admin',component:AdminComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'application',component:ApplicationComponent},
  {path:'loantracker',component:LoantrackerComponent},
  {path:'login',component:LoginComponent},
  {path:'upload',component:UploadComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

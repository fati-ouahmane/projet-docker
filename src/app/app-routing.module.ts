import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfilComponent } from './components/edit_profil/edit_profil.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import  {EditImageComponent} from "./components/edit_image/edit_image.component";
import { AddNewProblemComponent} from "./components/add-new-problem/add-new-problem.component";
import {ShowProblemDetailsComponent} from "./components/show-problem-details/show-problem-details.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit_profil', component: EditProfilComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'users', component: UserListComponent },
  {path :'edit_image' , component: EditImageComponent},
  {path :'addNewProblem' , component: AddNewProblemComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path :'showProblemDetails' , component: ShowProblemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

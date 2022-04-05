import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSingleComponent } from './components/user-single/user-single.component';

const routes: Routes = [
 {
   path: '',
   component: UserListComponent
},
{
  path: ':username',
  component: UserSingleComponent

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

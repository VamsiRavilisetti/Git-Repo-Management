import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitReposManagementComponent } from './git-repos-management/git-repos-management.component';
import { CommitsScreenComponent } from './commits-screen/commits-screen.component';

const routes: Routes = [
  { path: '', component: GitReposManagementComponent },
  { path: 'commit/:repo/:branch', component: CommitsScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

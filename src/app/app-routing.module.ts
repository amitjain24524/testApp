import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { StudyAbroadComponent } from './study-abroad/study-abroad.component';
import { CoachingComponent } from './coaching/coaching.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'studyAbroad', component: StudyAbroadComponent },
  { path: 'contact', component: ContactComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
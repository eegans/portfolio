import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { InternalComponent } from './portfolio/internal/internal.component';
import { DesignProcessComponent } from './portfolio/design-process/design-process.component';
import { RebrandComponent } from './portfolio/rebrand/rebrand.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'internal', component: InternalComponent},
  { path: 'design-process', component: DesignProcessComponent },
  { path: 'rebrand', component: RebrandComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

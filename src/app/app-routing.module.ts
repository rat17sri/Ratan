import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { EmrTranscriptionComponent } from './components/emr-transcription/emr-transcription.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { HippaComponent } from './components/hippa/hippa.component';
import { MobileDictationComponent } from './components/mobile-dictation/mobile-dictation.component';
import { PracticeFusionComponent } from './components/practice-fusion/practice-fusion.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'emrTranscription',component:EmrTranscriptionComponent},
  {path:'hippa',component:HippaComponent},
  {path:'howItWorks',component:HowItWorksComponent},
  {path:'mobileDictation',component:MobileDictationComponent},
  {path:'practiceFusion',component:PracticeFusionComponent},
  {path:'blog',component:BlogComponent},
  {path:'login',component:LoginComponent},
   {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,AboutComponent,ContactComponent,
  EmrTranscriptionComponent,HippaComponent,HowItWorksComponent,
  MobileDictationComponent,PracticeFusionComponent,BlogComponent,LoginComponent]
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmrTranscriptionComponent } from './components/emr-transcription/emr-transcription.component';
import { PracticeFusionComponent } from './components/practice-fusion/practice-fusion.component';
import { MobileDictationComponent } from './components/mobile-dictation/mobile-dictation.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { HippaComponent } from './components/hippa/hippa.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    EmrTranscriptionComponent,
    PracticeFusionComponent,
    MobileDictationComponent,
    HowItWorksComponent,
    HippaComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

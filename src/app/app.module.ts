import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { WhyComponent } from './components/why/why.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { BlogComponent } from './components/blog/blog.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaComponent } from './components/cta/cta.component';
import { PopUpLoginComponent } from './components/pop-up-login/pop-up-login.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    PartnersComponent,
    AdvantagesComponent,
    WhyComponent,
    FeaturesComponent,
    TestimonialsComponent,
    StatisticsComponent,
    BlogComponent,
    FaqComponent,
    CtaComponent,
    PopUpLoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

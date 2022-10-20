import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RedesComponent } from './components/redes/redes.component';
import { GoupComponent } from './components/goup/goup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { IonicModule } from '@ionic/angular';
import { SoftwareComponent } from './components/software/software.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutMeComponent,
    PortfolioComponent,
    ProyectosComponent,
    ContactoComponent,
    RedesComponent,
    GoupComponent,
    NavbarComponent,
    BannerComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

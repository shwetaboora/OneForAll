import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// import { CarouselComponent } from './Home/carousel/carousel.component';
import { HomeComponent } from './Home/home/home.component';
import { EveryVoiceComponent } from './Home/every-voice/every-voice.component';
// import { FeaturesComponent } from './Home/features/features.component';
import { TutorialComponent } from './Home/tutorial/tutorial.component';
import { PricingComponent } from './Home/pricing/pricing.component';
import { PicboardComponent } from './PictureBoard/picboard/picboard.component';
import { EmotionsComponent } from './PictureBoard/emotions/emotions.component';
import { GroceryComponent } from './PictureBoard/grocery/grocery.component';
import { SocialComponent } from './PictureBoard/social/social.component';
import { FestivalsComponent } from './PictureBoard/festivals/festivals.component';
import { TourismComponent } from './PictureBoard/tourism/tourism.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VoiceComponent } from './voice/voice.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EveryVoiceComponent,
    // FeaturesComponent,
    TutorialComponent,
    PricingComponent,
    PicboardComponent,
    EmotionsComponent,
    GroceryComponent,
    SocialComponent,
    FestivalsComponent,
    TourismComponent,
    FooterComponent,
    AboutUsComponent,
    VoiceComponent,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    // CarouselModule,
    MatIconModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

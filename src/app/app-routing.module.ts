import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsComponent } from './PictureBoard/emotions/emotions.component';
import { PicboardComponent } from './PictureBoard/picboard/picboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './Home/home/home.component';
import { GroceryComponent } from './PictureBoard/grocery/grocery.component';
import { TourismComponent } from './PictureBoard/tourism/tourism.component';
import { SocialComponent } from './PictureBoard/social/social.component';
import { FestivalsComponent } from './PictureBoard/festivals/festivals.component';
import { VoiceComponent } from './voice/voice.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent},
  { path: 'picboard', component: PicboardComponent },
  { path: 'emotions', component: EmotionsComponent },
  { path: 'grocery', component: GroceryComponent },
  { path: 'tourism', component: TourismComponent },
  { path: 'social', component: SocialComponent},
  { path: 'festivals', component: FestivalsComponent },
  { path: 'voice', component: VoiceComponent },
  { path: 'voice', component: VoiceComponent }, 
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

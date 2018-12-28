import { MatVideoModule } from './components/video/video.module';
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { HomeComponent } from './components/home/home.component';
import { ModelProfileComponent } from './model-profile/model-profile.component';
import { ModelAdminComponent } from './model-admin/model-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModelProfileComponent,
    ModelAdminComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
    VgControlsModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

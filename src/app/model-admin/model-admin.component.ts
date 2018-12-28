import { Component } from '@angular/core';

@Component({
  selector: 'app-model-admin',
  templateUrl: './model-admin.component.html',
  styleUrls: ['./model-admin.component.css']
})
export class ModelAdminComponent {

  ngclass = 'mat-video-responsive';

  src = 'assets/NASA.mp4';
  title = 'NASA Rocket Launch';
  width = 600;
  height = 337.5;
  autoplay = false;
  preload = true;
  loop = false;
  quality = true;
  download = true;
  fullscreen = true;
  keyboard = true;
  color = 'primary';
  spinner = 'spin';
  poster = 'assets/NASA.jpg';

}

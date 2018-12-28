import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  playlist: Array<IMedia> = [
    {
      title: 'Sexy Vannah',
      subtitle: 'Vannah is LIVE!',
      description:
        'Vannah is one of the worlds top models with millions of fans accross the nation.',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4'
    },
    {
      title: 'Big Buck Bunny',
      subtitle: 'Vannah is LIVE!',
      description:
        'Vannah is one of the worlds top models with millions of fans accross the nation.',
      src:
        'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4'
    },
    {
      title: 'Elephants Dream',
      subtitle: 'Vannah is LIVE!',
      description:
        'Vannah is one of the worlds top models with millions of fans accross the nation.',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4'
    }
  ];
  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];

  onClickPlaylistItem(item: IMedia) {
    this.currentIndex = index;
    this.currentItem = item;
  }
}

import {Component, Input} from '@angular/core';
import {Tracks} from '../../../tracks/collections/tracks.collection';
import {Track} from '../../../tracks/models/track.model';

@Component({
  selector: 'sort-tracks',
  styles: [ require('./sort-tracks.style.scss') ],
  template: require('./sort-tracks.template.html')
})
export class SortTracksComponent {

  @Input() tracks: Tracks<Track>;

}

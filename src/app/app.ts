import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = signal('upNext');

  changeTitle() {
    this.title.update((prv: string) => {
      return (prv + ' Clicked');
    });
  }
}

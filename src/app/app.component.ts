import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Updated title"
    // }, 10000);
  }
}

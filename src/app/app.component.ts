import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mar22assignmentng';

  products = [
    'product 1',
    'product 2'
  ]

  saysomething(){
    return "something..."
  }
}

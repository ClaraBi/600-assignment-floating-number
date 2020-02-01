import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  value1 = 0.1 + 0.2;
  value2 = 0.5 - 0.2;
  results = '';

  ngOnInit(): void {
    if (this.value1 === this.value2) {
      this.results = 'equal';
    } else {
      this.results = 'not equal';
    }

  }

}

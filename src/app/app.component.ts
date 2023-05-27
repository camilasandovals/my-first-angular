import { Component, OnInit } from '@angular/core';
import { PlaystationService } from './services/playstation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any[] = [];

  constructor(private playstationService: PlaystationService) {}

  ngOnInit() {
    this.fetchPlaystationData();
  }

  title = 'my-first-angular';

  fetchPlaystationData() {
    this.playstationService.getPlaystationData().subscribe(
      (data) => {
        console.log(data); // Display the data in the console
        this.data = data;// Handle the data as per your requirements
      },
      (error) => {
        console.error('An error occurred:', error);
        // Handle the error appropriately
      }
    );
  }
}

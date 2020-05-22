import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dojo Weather Forecast';
  selectedCity: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

}

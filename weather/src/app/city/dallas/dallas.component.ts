import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.scss']
})
export class DallasComponent implements OnInit {
  city: any;
  temp: Number;
  temp_High: Number;
  temp_Low: Number;
  status: String;
  weather: any;

  constructor(private apiService: ApiService, private _router:Router) { }

  ngOnInit() {
    this.apiService.getDallasApi().subscribe((data) => {
      this.city = data['name']
      this.weather = data['main']
      this.status = data['weather']
      console.log(this.city)
      this._router.navigate(['/dallas'])
    })

  }
}



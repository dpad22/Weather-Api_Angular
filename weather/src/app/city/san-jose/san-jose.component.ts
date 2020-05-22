import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.scss']
})
export class SanJoseComponent implements OnInit {
  city: any;
  temp: Number;
  temp_High: Number;
  temp_Low: Number;
  status: String;
  weather: any;
  
  constructor(private apiService: ApiService, private _router:Router) { }

  ngOnInit() {
    this.apiService.getSanJoseApi().subscribe((data) => {
      this.city = data['name']
      this.weather = data['main']
      this.status = data['weather']
      console.log(data);
      this._router.navigate(['/sanJose'])

      
    })

  }

}

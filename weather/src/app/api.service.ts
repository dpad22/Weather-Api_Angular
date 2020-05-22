import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
api_key = '4f3e28f0b8b0098757ab0d171d5966c8';



  constructor(private httpClient: HttpClient) { }

  public getDallasApi(){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`)
  }
  public getBurbankApi(){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=Burbank&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`)
  }
  public getSeattleApi(){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`)
  }
  public getSanJoseApi(){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?id=5392171&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`)
  }
  public getWashingtonApi(){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?id=4140963&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`)
  }
  public getChicagoApi(){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=4f3e28f0b8b0098757ab0d171d5966c8`)
  }
}

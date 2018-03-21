import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Result } from '../models/result.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  searchText: string;
  btnText: string = 'Sök lokalt';
  data: Array<Result> = [];
  ROOT_URL: string;
  latitude: string = '';
  longitude: string = '';
//36.7201600
//-4.4203400
  constructor(private _http: HttpClient) { 
  }

  ngOnInit() {
    
  }

  getData(){
    this.data = [];
    this.ROOT_URL= 'https://api.sunrise-sunset.org/json?lat='+this.latitude+'&lng='+this.longitude;
    this._http.get<Result>(this.ROOT_URL)
    .subscribe( data => {
      this.data.push(data)
      console.log(this.data[0].results.sunrise)
    })
    
  }

}

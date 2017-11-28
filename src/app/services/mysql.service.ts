import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MysqlService {

  constructor(public _http: Http) {
  }

  public addMysqlUserDatas(_firstname: string, _lastname: string) {
    const url = 'http://www.***YOUR_WEBSERVER***/post_users.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(url, {id: '', firstname: _firstname, lastname: _lastname}, {headers: headers})
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }

  public getMysqlUsersDatas() {
    return this._http.get('http://www.***YOUR_WEBSERVER***/get_users.php')
    /*.do(x => console.log(x))**/
      .map(rep => rep.json());
  }

  public getLocalUsersDatas() {
    return this._http.get('./assets/users.json')
    /* .do(x => console.log(x))**/
      .map(rep => rep.json());
  }

  public getLocalTextDatas() {
    return this._http.get('./assets/read.txt')
    /* .do(x => console.log(x))**/
      .map(rep => rep.text());
  }
}



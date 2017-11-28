import { Component, OnInit } from '@angular/core';
import { MysqlService} from '../services/mysql.service';


@Component({
  selector: 'app-post-users',
  templateUrl: './post-users.component.html',
  styleUrls: ['./post-users.component.css'],
  providers: [MysqlService]
})
export class PostUsersComponent implements OnInit {

  constructor(private _mysqlService: MysqlService) { }

  ngOnInit() {
  }
  addUser(firstName: string, lastName: string) {
    if (this._mysqlService.addMysqlUserDatas(firstName, lastName)) {
      alert('Data Inserted Successfully');
    }
  }
}

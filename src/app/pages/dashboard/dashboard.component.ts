import { JsonPipe } from '@angular/common';
import { UserService } from './../../core/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  userList : any[] = []
  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    debugger
    this.userSrv.getAllUsers().subscribe((res:any)=>{
      this.userList = res.data
      debugger
    })
  }

}

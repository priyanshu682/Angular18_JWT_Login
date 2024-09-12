import { Injectable } from '@angular/core';
import { MasterService } from './master/master.service';
import { Observable } from 'rxjs';
import { Login } from '../models/class/login';
import { Constants } from '../constants/Constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private masterSrv: MasterService) { }

  userLogin(obj: Login): Observable<Login[]> {
    debugger
    return this.masterSrv.post(Constants.USER_API_URL + Constants.USER_METHODS.LOGIN, obj)
  }

  getAllUsers() {
    debugger
    return this.masterSrv.get(`${Constants.USER_API_URL}${Constants.USER_METHODS.GET_ALL_USERS}`)
  }
}

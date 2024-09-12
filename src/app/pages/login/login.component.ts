import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../core/models/class/login';
import { UserService } from '../../core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login = new Login()
  userSrv = inject(UserService)
  router = inject(Router)

  onLogin() {
    debugger
    this.userSrv.userLogin(this.loginObj).subscribe((res: any) => {
      debugger
      if (res.result) {
        debugger
        alert(res.message)
        localStorage.setItem('token', res.data.token)
        debugger
        this.router.navigateByUrl('dashboard')
      } else {
        debugger
        alert(res.message)
      }
    })
  }
}

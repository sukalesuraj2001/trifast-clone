import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  menuType: string = 'default'

  toForgot(){
    this.menuType = 'forgot'
  }
  toRegister(){
    this.menuType = 'register'
  }
}

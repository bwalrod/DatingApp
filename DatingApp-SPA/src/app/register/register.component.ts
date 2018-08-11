import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      // console.log('Registration Successful');
      this.alertify.success('Registration Successful');
    }, error => {
      // console.log(error);
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    // console.log('Cancel');
    this.alertify.warning('Cancel');
  }
}

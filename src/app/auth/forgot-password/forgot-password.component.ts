import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass'],
  providers: [AuthService]
})
export class ForgotPasswordComponent implements OnInit {

  recoveryForm = new FormGroup({
    email: new FormControl('')
  });

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  async onRecovery() {
    try {
      const { email } = this.recoveryForm.value;
      await this.authSvc.resetPassword(email)
      window.alert("Email sent, check your mail.")
      this.router.navigate(['/login']);
    }
    catch (error) {
      console.log(error);
    }
  }

}

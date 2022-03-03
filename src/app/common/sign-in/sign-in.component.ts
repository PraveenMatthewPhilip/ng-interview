import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  submitted = false;
  signedIn = false;
  @Input() signInDialog = false;
  @Output() closeSignIn = new EventEmitter();
  email = 'user@gmail.com';
  password = '1234';
  constructor() {}

  ngOnInit(): void {}

  SignIn() {
    this.closeSignIn.emit(true);
    this.signedIn = true;
    this.signInDialog = false;
  }
}

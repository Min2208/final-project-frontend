import {Component, OnInit} from '@angular/core';
import {JwtService} from '../jwt.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: FormGroup;

  constructor(private jwtService: JwtService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.data = this.fb.group({
      email: '',
      password: ''
    });
  }

  login() {
    this.jwtService.login(this.data.value).subscribe(() => {
      this.router.navigate(['/home']);
    });

  }

}

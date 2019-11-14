import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {JwtService} from '../jwt.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data: FormGroup;

  constructor(private jwtService: JwtService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.data = this.fb.group({
      email: '',
      password: ''
    });
  }

  register() {
    this.jwtService.register(this.data.value).subscribe(() => {
      this.jwtService.login(this.data.value);
      this.router.navigate(['/home']);
    });

  }
}

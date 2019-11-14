import {Component, OnInit} from '@angular/core';
import {User} from '../user.interface';
import {JwtService} from '../jwt.service';
import {Information} from '../information';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: Information[];

  constructor(private jwtService: JwtService) {
    this.jwtService.getMembers().subscribe(next => {
      this.data = next;
    });
  }

  ngOnInit() {
  }

}

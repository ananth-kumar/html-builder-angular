import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { CloudService } from '../../services/cloud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cloudService: CloudService
  ) { }

  ngOnInit() {
    console.log(this.cloudService.getData());
  }
  goBack(): void {
    this.location.back();
  }

}

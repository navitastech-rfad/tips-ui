import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tips-home',
  templateUrl: './tips-home.component.html',
  styleUrls: ['./tips-home.component.css']
})
export class TipsHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigateByUrl('/tipperinfo');
  }

}

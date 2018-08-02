import { Component, OnInit } from '@angular/core';
import { Tip } from '../_model/tip';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-tipper-information',
  templateUrl: './tipper-information.component.html',
  styleUrls: ['./tipper-information.component.css']
})
export class TipperInformationComponent implements OnInit {
  public tip: Tip = new Tip;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigateByUrl('/tipperinfo');
  }

}


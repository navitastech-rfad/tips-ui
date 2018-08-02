import { Component, OnInit } from '@angular/core';
import { Tip } from '../_model/tip';

@Component({
  selector: 'app-tipper-information',
  templateUrl: './tipper-information.component.html',
  styleUrls: ['./tipper-information.component.css']
})
export class TipperInformationComponent implements OnInit {
  public tip: Tip = new Tip;
  constructor() { }

  ngOnInit() {
  }

}


import { Component, OnInit } from '@angular/core';
import { Tip } from '../_model/tip';
import { ActivatedRoute, Router } from '@angular/router';
import { TipService } from '../_service/tip.service';
import { AlertService } from '../_service/alert.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-tipper-information',
  templateUrl: './tipper-information.component.html',
  styleUrls: ['./tipper-information.component.css']
})
export class TipperInformationComponent implements OnInit {
  public tip: Tip = new Tip;
  loading = false;
  error = '';


  constructor(private router: Router, private tipService: TipService, private alertService: AlertService) { }

  ngOnInit() {
  }

  submit() {
    this.loading = true;
    this.tipService.saveTip(this.tip)
      .pipe(first())
      .subscribe(result => {
        if (!result.role || 0 === result.role.length) {
          console.log('%%%%%%%%%%: ' + JSON.stringify(result));

          this.error = 'Tip Could not be saved!!';
          this.loading = false;
        } else {
          console.log('************: ' + JSON.stringify(result));
          this.router.navigate(['/tipconfirmation']);
        }

      },
        error => {
          this.alertService.error('Tip not submitted!! Try later');
          this.loading = false;
        });
  }

}


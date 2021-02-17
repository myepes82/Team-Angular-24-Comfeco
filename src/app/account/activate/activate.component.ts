import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivateService } from './activate.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {
  user_id = ''
  isActived = false;
  constructor(
    private route: ActivatedRoute,
    private activateService: ActivateService
    ) { }

  ngOnInit(): void {
    this.user_id = this.route.snapshot.paramMap.get('id')
    this.verify()
  }

  verify(): void{
    this.activateService.verify({
      id: this.user_id
    }).subscribe(res => {
      this.isActived = true;
    })
  }

}

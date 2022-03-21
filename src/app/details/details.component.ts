import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  list:any = [];
  device :any = {};
  constructor(private dev:DevicesService,private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.router.params.subscribe((res:any)=>{
      console.log();
      this.device = this.dev.getDeviceDetails(+res.id);
    this.list = this.dev.getRecent();
    console.log(this.list)


    })
  }

  goTo(id:number){
    this.route.navigate(['details/', id]);
  }

}

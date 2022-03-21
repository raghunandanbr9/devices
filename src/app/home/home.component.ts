import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list:any = [];
  listCopy:any = [];
  searchStr:string = "";
  constructor(private dev:DevicesService,private router:Router) { }

  ngOnInit(): void {
    this.list = this.dev.getDevices();
    this.listCopy = [...this.list];
  }

  goTo(id:number){
    this.router.navigate(['details/', id]);
  }
  search(){
    
    this.list = this.listCopy.filter((device:any) => device.name.toLowerCase().includes(this.searchStr.toLowerCase()));
  }
}

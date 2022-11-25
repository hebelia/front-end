import{Component, OnInit} from '@angular/core';

import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner: string="";

  constructor(private data: ServiceService) { }

ngOnInit():void {
  this.data.getService().subscribe(info =>{
    this.banner = info.banner;
  })
}

}

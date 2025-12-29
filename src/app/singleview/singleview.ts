import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-singleview',
  imports: [],
  templateUrl: './singleview.html',
  styleUrl: './singleview.css',
})
export class Singleview {
  //declare an array
  singleproduct:any;
  //create a constructor and initialize object of api service
  constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  //create ngonit function(page load)
  ngOnInit()
  {
    //parameter mapping
    const
    productid=this.route.snapshot.paramMap.get('titleid');
    if(productid)
    {
      this.apiservice.getsingleproducts(productid).subscribe((data)=>{
    
      this.singleproduct=data;
      this.cdr.detectChanges()
      
    });
    }
  }

}

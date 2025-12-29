import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product:any[]=[]; //to declare any type or size of data
  constructor(private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
  ngOnInit(){ // to give data to array
    this.apiservice.getproduct().subscribe((data:any)=>{
      this.product=data;
      this.cdr.detectChanges();
    });
  }

}

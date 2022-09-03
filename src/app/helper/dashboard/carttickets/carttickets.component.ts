import { Component, OnInit, OnChanges, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CartService } from './../../../shared/services/cart.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carttickets',
  templateUrl: './carttickets.component.html',
  styleUrls: ['./carttickets.component.scss']
})
export class CartticketsComponent implements OnInit {

  dataObject :any=[];
  checkObject :any=[];
  cartObject : any=[];
  totalCost: number = 0;
  cartCheck: any;

  private _jsonURLcart = '/assets/data/tickets/tickets-2022.json';

  constructor(private http: HttpClient, private cs: CartService, public router: Router, private cdr: ChangeDetectorRef) {
   this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
   
  }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.dataObject = data;
      this.checkData();
     });
  }


  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURLcart);
  }

  checkData(){
   [...this.dataObject].forEach(value => {
     [...this.cartCheck].forEach(element => {
       if(value.sku === element.sku){
         value.quantity = element.quantity;
       }
     });
      
   });
//   console.log('this.dataObject - Check data');
//   console.log(this.dataObject);
  }

  ngAfterViewChecked(): void {
    let tc = 0;
    [...this.dataObject].forEach(value => {
      if(value.quantity > 0){ 
        tc += (value.price * value.quantity);
     } 
    });
    this.totalCost = tc;
    this.cdr.detectChanges();
  }

  addToCartobj(){
    console.log(this.dataObject);
    console.log(this.cs.items);
    this.cs.items = [];
    console.log(this.cs.items);
    this.dataObject.forEach((value:any) => {
  //    console.log(value.quantity);
    //  console.log(value);
      if(value.quantity > 0){ 
       // this.cs.addToCart(value);
        console.log(value.quantity);
        this.cs.items.push(value);
      //  this.totalCost += (parseFloat(value.price) * parseFloat(value.quantity));
        // value.tax = (value.price * value.quantity) * 0.00; 
        // value.tax = parseFloat(value.tax).toFixed(2);
       // this.cs.addToCart(value);
       
        console.log(value);
     //   this.checkObject.push(value);
     } 
    });
    console.log(this.cs.items);
    this.cs.addToCart(this.cs.items);
    
 //   this.cs.addToCart(this.checkObject);
    this.router.navigate(['/checkout']);
 //   this.router.navigate(['/heroes', { id: itemId }]);

 //   item.count = 
//    this.cartService.addToCart();
  }

}

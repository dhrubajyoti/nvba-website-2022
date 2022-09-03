import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { CartService } from './../../../shared/services/cart.service';
import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { MemberService } from './../../../shared/member/member.service';

// declare var paypal;
import * as moment from 'moment';

@Component({
  selector: 'app-cartmember',
  templateUrl: './cartmember.component.html',
  styleUrls: ['./cartmember.component.scss']
})
export class CartmemberComponent implements OnInit {

  member:any;
  expired:any;
  currentDate:any;
  parts:any;
  oldUser:boolean = true;

  memberValidity : boolean = false;

  ticketData : any=[];
  dataObject :any=[];
  checkObject :any=[];
  cartObject : any=[];
  totalCost: number = 0;
  cartCheck: any;

  private  memberCart = [{
    "name": "NVBA Annual Membership",
    "description": "NVBA Annual Membership Fee - 2022",
    "quantity": 1,
    "price": 20,
    "tax": 0,
    "sku": "MM2022YY",
    "currency": "USD" 
  }];

  constructor(
    private auth: AuthService, 
    private memberservice:MemberService,
    private cs: CartService, 
    public router: Router
  ) { 
    this.cs.currentCart.subscribe( cartCheck => this.cartCheck = cartCheck);
    this.dataObject = this.memberCart;
    // this.member = this.auth.cast.subscribe((m)=>{this.member=m});
    // console.log(this.member);
  }


  ngOnInit(): void {

    this.auth.cast.subscribe( m => {
      this.member = m;
      console.log(this.member);
      let current = moment();

      if(moment(this.member.expires).isAfter(current)){
        this.memberValidity = true;
        this.member.membershipstatus = 'Valid';
      }
      else{
        this.memberValidity = false;
        this.member.membershipstatus = 'Expire';
      }


    });

   

      // }
      // else{
      //   this.member.expires = current.format('M-D-YYYY');
      //   this.member.membershipstatus = 'Expire';
      //   this.member.joined = current.format('M-D-YYYY');
      //   this.oldUser = false;
      // }

      this.memberservice.UpdateMember(this.member.id, this.member);
      console.log('this member'+ this.member);
      console.log(this.member);

   } 

   addToCartobj(){
    this.cs.items = [];
 ///   this.memberCart.tax  = parseFloat(this.memberCart.tax ).toFixed(2);
    this.cs.addToCart(this.memberCart); 
    console.log(this.memberCart);
    this.router.navigate(['/checkout']);
  }

}
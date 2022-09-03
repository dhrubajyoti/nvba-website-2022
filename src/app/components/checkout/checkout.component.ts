import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService} from './../../shared/services/cart.service';
import { MemberService } from './../../shared/member/member.service';
import { from } from 'rxjs';
//import { ToastrService } from 'ngx-toastr';
import { Location} from "@angular/common";
import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';

import * as moment from 'moment';
declare let paypal:any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartCheck: any = [];
  subtotal: number = 0;
  tax: number = 0;
  addScript: boolean = false;
  paypalLoad: boolean = true;
  emptyCart: boolean = false;

  member:any;

  userDetails: any;
  move:boolean = false;


  public payPalConfig ? : IPayPalConfig;
  item: any;

  constructor( 
    private cart: CartService, 
    //private toastr: ToastrService,
    private ar: ActivatedRoute,
    private mds: MemberService,
    private location: Location,
    private router: Router,
    private userService: AuthService
    ) {

      this.userService.cast.subscribe( m => {
        this.member = m;
        console.log(this.member);
      });

    this.cart.currentCart.subscribe( (cartCheck) => this.cartCheck = cartCheck);
    console.log(this.cartCheck.length);
    console.log(this.cart.getItems());

    }

  ngOnInit(): void {
        this.cartCheck.forEach((i:any)=>{
        //  console.log(parseFloat(i.price) * parseFloat(i.quantity));
          this.subtotal +=(( parseFloat(i.price)) * (parseFloat(i.quantity)));
          this.emptyCart = true;
        });
        // console.log( moment(this.member.expires).format('LL') );
        // console.log( 'Line 68 - expires date=> '+ this.member.expires );

        // var current = moment();
        // console.log(current.toString());

        // console.log( moment(this.member.expires).isSame(current)); // true
        // console.log( moment(this.member.expires).isAfter(current)); // false
        
        // if(moment(this.member.expires).isSame(current) ||  moment(current).isAfter(this.member.expires) ){
        //   console.log(moment(current).add(1, 'years').format('M-D-YYYY'));
        //   this.member.expires = moment(current).add(1, 'years').format('M-D-YYYY');
        // }
        // else{
        //  console.log( moment(current).add(1, 'years').format('M-D-YYYY') );
        //   this.member.expires = moment(this.member.expires).add(1, 'years').format('M-D-YYYY');
        //   console.log( this.member.expires );
        // }

  }




   ngAfterViewInit(): void {
    if(this.cartCheck){
      if (!this.addScript) {
        this.addPaypalScript().then(() => {
          paypal.Button.render(this.paypalConfig, '#paypal-button-container');
          this.paypalLoad = false;
           console.log(this.paypalConfig);  
        })
      }
    }
   } // }  // End of ngAfterViewInit

   addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
   //   console.log(scripttagElement);
    })
  } // End of AddPaypalScript


  paypalConfig = {
      env: 'sandbox',
    //  env: 'production',
      client: {
        sandbox: 'AeLhWUCfC2jHOZv7b-KDfZV6R6Mig-2FklW6iIxsuI0UROww652TU9SlVPHyW1ygMGohQo21TfXUVPrz',
    //    production: 'AVBsfj0Jw-jl5_63BPGwuduCaKDsPvbz1pwyqECm7N5FzKEi1Q_o-xQAiM_BTzQhAW064uAPf1v9uZdS'
      },
      style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'paypal',
      },
      commit: true,
      payment: (data:any, actions:any) => {
        return actions.payment.create({
          payment: {
            transactions: [ 
              {
                "amount": {
                  "total": (this.subtotal + this.tax),
                  "currency": "USD",
                  "details": {
                    "subtotal": this.subtotal,
                    "tax": this.tax
                  }
                },
                "description": "NVBA Website Payment.", 
                "item_list": {
                  "items": this.cartCheck
                }  
              }
            ]
          }
        });
      },
      onAuthorize: (data:any, actions:any) => {
        return actions.payment.execute().then((payment:any) => {
          let paymentTrans = {...payment};
  
          //Do something when payment is successful.
           console.log(payment);
           console.log(this.member);

           //Adjust Expiretion Date
           if( payment.transactions[0].item_list.items[0].name == 'NVBA Annual Membership' ){
              
              let current = moment(); 
              console.log( moment(this.member.expires).isSame(current)); // true
              console.log( moment(this.member.expires).isAfter(current)); // false
              
              if(moment(this.member.expires).isSame(current) ||  moment(current).isAfter(this.member.expires) ){
                this.member.expires = moment(current).add(1, 'years').format('M-D-YYYY');
              }
              else{
                this.member.expires = moment(this.member.expires).add(1, 'years').format('M-D-YYYY')
              }
            }


           if((!this.member.payments) && (!this.member.purchase) ){ 
            console.log('First Time');
            this.member.payments = [];
            this.member.purchase = [];
           }
           else 
            console.log('regular Member');

           this.member.payments.unshift(paymentTrans);
           this.member.purchase.unshift(this.cartCheck);
           console.log(this.member);
           this.mds.UpdateMember(this.member.id, this.member);
           console.log('update done');
        //   this.toastr.success('Your payment is successful.');
          
        //    if(this.member.email){
  
        //       if(!this.member.payments){
        //         this.member.payments = [];
        //         console.log('First Time');
        //       }
        //       this.member.payments.unshift(paymentTrans);
        //       this.updateMemberDetailsFun(payment);
        //       if(!this.member.purchase){
        //           this.member.purchase = [];
        //       //   console.log('First Time purchase');
        //       }
        //       this.member.purchase.unshift(this.cartCheck);
        //       this.mds.UpdateMember(this.member.id, this.member);
        //     //  this.mds.addPayments(payment) ;
        //    }
        //    else{
        //     console.log('in Else');
        //  //   this.mds.addPayments(payment) ;
        //    }
          
       
             this.cart.clearCart();
             this.cleanup();
            // this.router.navigate(['/durgapuja2020']);
  
            setTimeout(()=>{                           
              this.router.navigate(['/home']);
            }, 6000);
            
  
        })
      }
    };


    updateMemberDetailsFun(payment:any){
      console.log(payment.transactions[0].item_list.items[0].name);
      // Add Membership Details Start
        if( payment.transactions[0].item_list.items[0].name == 'NVBA Annual Membership' ){
          console.log('Inside If');
            let newdate;
            let date = moment();
            let expiredDate = moment(this.member.expires);
            console.log(expiredDate);

            if(this.member.expires){
        //   newdate = new Date(new Date().setFullYear(new Date(this.member.expires).getFullYear() + 1))
             newdate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
             date = moment( new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
             console.log('If = '+ newdate);
             console.log(newdate);
             console.log('If = '+ date);
             console.log(date.format('MMMM Do YYYY, h:mm:ss'));
            }
            else{
            newdate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
       //     alert('else = '+newdate);
            }
            
           this.member.expires = newdate.toISOString().split('T')[0];
           this.member.expires = date;
          
            this.member.membershipstatus = 'Valid';
            this.mds.UpdateMember( this.member.id, this.member );
        } // Add Membership Details End
  
          //   // Add Non-Membership Ticket Details 
          //   if( payment.transactions[0].item_list.items[0].name == 'Non-Member Concert ticket' ){
  
          //     this.member.nonmemberpogramticket = "paid";
              
          // } // Add Non-Membership Ticket Details

        return true;
    }  



  goBack(){
      this.location.back();
  }

  cleanup(){
    this.cartCheck = [];
    this.subtotal = 0;
    this.tax= 0;
    this.emptyCart= true;
  }



}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailService } from 'src/app/mail.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private service:MailService,private toastr:ToastrService,private router:Router) { }
  contactForm:FormGroup = new FormGroup({
    contactName:new FormControl(null,Validators.required),
    contacEmail:new FormControl(null,[Validators.email,Validators.required]),
    contactSubject:new FormControl(null,Validators.required),
    contactDescription:new FormControl(null,Validators.required),
  });

  ngOnInit(): void {
    this.toastr.success('Success','Your response has been sent');
    this.toastr.info('Success','Your response has been sent');
  }
  contactUs(){
    let data = {
      name:this.contactForm.value.contactName,
      senderEmail:this.contactForm.value.contacEmail,
      subject:this.contactForm.value.contactSubject,
      description:this.contactForm.value.contactDescription
   };
   
  this.service.sendMail(data).subscribe((response:any)=>{
    if(response.success){
      this.toastr.info('Success','Your response has been sent');
    }
    else
    this.toastr.error('Some Error Occurred');
    this.router.navigate(['']);
  })

}
}

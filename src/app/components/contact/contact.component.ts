import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailService } from 'src/app/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  constructor(private service:MailService) { }
  contactForm:FormGroup = new FormGroup({
    contactName:new FormControl(null,Validators.required),
    contacEmail:new FormControl(null,[Validators.email,Validators.required]),
    contactSubject:new FormControl(null,Validators.required),
    contactDescription:new FormControl(null,Validators.required),
  });

  ngOnInit(): void {
  }
  contactUs(){
    let data = {
      name:this.contactForm.value.contactName,
      senderEmail:this.contactForm.value.contacEmail,
      subject:this.contactForm.value.contacEmail,
      description:this.contactForm.value.contacEmail
   };
   
  this.service.sendMail(data).subscribe((response:any)=>{
    console.log(response);
  })

}
}

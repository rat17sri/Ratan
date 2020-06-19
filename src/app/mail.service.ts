import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from './mail';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  sendMail(mail:Mail){
   return this.http.post('https://ratan-mail.herokuapp.com/api/contact-us/email',mail);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngAppAssign';
  message: string = "Welcome to this page!";
  name = 'Text';
  displayval:string = 'Suad';
  inputValue: string='';

 onInputChange(event:any){
    this.inputValue=event.target.value;
  }
  

  // navigate(){
  //   this.router.navigateByUrl('/student');
  // }

}


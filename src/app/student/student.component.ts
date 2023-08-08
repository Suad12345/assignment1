import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  //Mark: number=0;

  student: any[] = [
    { name: 'Sara', email: 'sara@gmail.com', Mark: 55 },
    { name: 'Ahmed', email: 'ahmed@gmail.com', Mark: 30 },
    { name: 'Name 2', email: 'Email2@gmail.com', Mark: 60 },
    // Add more students if needed
  ];



}
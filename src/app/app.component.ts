import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAdvanced';

  Johninformation = "He is in london working as a senior software engineer"

  robertinformation = "He is in australia working as a  software engineer"


  isClicked = false;

  InformationMore(){
    this.isClicked = true;
  }

  employees = [{
    name : 'John',
    skill : ".net",
    started : new Date(),
    information : "He is in london working as a senior software engineer"
  },
  {
    name : 'robert',
    skill : "java",
    started : new Date(),
    information : "He is in australia working as a  software engineer"
  },
  {
    name : 'Peter',
    skill : "Phython",
    started : new Date(),
    information : "He is in us working as a Team lead"
  },
  {
    name : 'Clerk',
    skill : "Angular",
    started : new Date(),
    information : "He is in uk working as a frent end developer "
  }]





}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Output() addUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(form){
    this.addUser.emit(form.value);
  }
}

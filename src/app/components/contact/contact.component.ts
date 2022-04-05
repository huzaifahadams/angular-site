import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
name?: string;
email?: string;
message?: string;
  // @Input() email?: string;
  // @Input() message?: string;
  // @Output() btnClick = new EventEmitter();




  constructor() { }

  ngOnInit(): void {
  }
  submitForm(){
    const msg = `name submitted is ${this.name}, Email is ${this.email} and the message is ${this.message}`
    alert(msg);

  }
  // onClick(){
  //   this.btnClick.emit();
  // }

}

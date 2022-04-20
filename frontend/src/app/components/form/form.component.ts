import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Form } from '@angular/forms';
import { Label } from 'src/app/classes/Label';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() content: Label[];
  @Input() buttonText: string;
  @Output() contentChange = new EventEmitter<Label[]>();
  objectKeys = Object.keys;

  constructor() {}

  ngOnInit(): void {}

  send() {
    this.contentChange.emit(this.content);
  }
}

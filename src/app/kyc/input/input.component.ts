import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  @Input() value: string = ''
  @Output() onChange = new EventEmitter<any>();
  constructor() { }

  onChangeInput(event: any) {
    const value = event.target.value
    const name = event.target.name
    this.value = value
    this.onChange.emit({ [name]: value })
  }

  ngOnInit() {
  }
}

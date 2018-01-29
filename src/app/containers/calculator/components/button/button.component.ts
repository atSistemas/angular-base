import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'base-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
  style = 'Button';
  @Input() value: string;
  @Input() type: string;
  @Output() clickButton = new EventEmitter();

  ngOnInit() {
    if (this.type === 'operator') this.style = 'ButtonOperate';
    else if (this.type === 'zero') this.style = 'ButtonZero';
  }

  onClick() {
    this.clickButton.emit(this.value);
  }

}
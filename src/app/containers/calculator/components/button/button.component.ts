import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'base-button',
  styleUrls: ['./button.component.css'],
  templateUrl: './button.component.html'
})

export class ButtonComponent implements OnInit {
  public style = 'Button'
  @Input() public value: string
  @Input() public type: string
  @Output() public clickButton = new EventEmitter()

  public ngOnInit () {
    if (this.type === 'operator') this.style = 'ButtonOperate'
    else if (this.type === 'zero') this.style = 'ButtonZero'
  }

  public onClick () {
    this.clickButton.emit(this.value)
  }

}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'gt-estimate-list-toolbar',
  templateUrl: './estimate-list-toolbar.component.html',
  styleUrls: ['./estimate-list-toolbar.component.css'],
})

export class EstimateListToolbarComponent {

  @Input() selectedEstimate: boolean;
  @Output() loadSelectedEstimate = new EventEmitter();

  loadEstimate() {
    this.loadSelectedEstimate.emit();
  }
}
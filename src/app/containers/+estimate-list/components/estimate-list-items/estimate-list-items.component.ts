import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'gt-estimate-list-items',
  templateUrl: './estimate-list-items.component.html',
  styleUrls: ['./estimate-list-items.component.css'],
})

export class EstimateListItemsComponent {

  @Input() estimateList;
  @Input() step;
  @Output() onSelectRow = new EventEmitter();

  onselectrow(item) {
    this.onSelectRow.emit(item);
  }

}


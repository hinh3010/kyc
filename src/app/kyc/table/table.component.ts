import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {
  @Input() tableData: object;
  @Output() onCheckAllEvent = new EventEmitter<any>();
  @ViewChild('tbodyRef', { static: true }) tbodyRef: ElementRef;

  checkAll: boolean = false
  checkItems: Array<boolean> = []

  constructor() { }

  ngOnInit() {
  }

  onCheckAll(event: any) {
    const value = event.target.checked
    this.onCheckAllEvent.emit(value)
    this.checkAll = value

    this.checkItems = this.checkItems.map(() => value)
  }

  ngAfterViewInit() {
    const tbody = this.tbodyRef.nativeElement
    const inputItem = tbody.querySelectorAll('input[type=checkbox]')

    Array.from(inputItem).map((input: any, idx: number) => {
      this.checkItems[idx] = input.checked
    })

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log({ changes })
  }

  onCheck(event: any) {
    console.log({ event })
  }

}



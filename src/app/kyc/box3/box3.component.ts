import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.scss']
})
export class Box3Component implements OnInit {

  file: any = null
  constructor() { }

  ngOnInit() {
  }

  onSelectFile(event: File) {
    console.log({ event })
  }

}

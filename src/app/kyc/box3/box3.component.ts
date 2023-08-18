import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.scss']
})
export class Box3Component implements OnInit {

  showImg: boolean = false;
  @ViewChild('imageElement', { static: true }) imageElement: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onSelectFile(file: File) {
    this.showImg = true
    const blobUrl = URL.createObjectURL(file)
    this.imageElement.nativeElement.src = blobUrl;
  }

}

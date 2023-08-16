import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @Output() onSelectFile = new EventEmitter<File>();
  constructor() { }

  onChange(event: any) {
    const file = event.target.files[0]
    this.onSelectFile.emit(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files) {
      const file = files[0]
      this.onSelectFile.emit(file);
    }
  }

  ngOnInit() {
  }

}

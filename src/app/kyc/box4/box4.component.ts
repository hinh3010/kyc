import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box4',
  templateUrl: './box4.component.html',
  styleUrls: ['./box4.component.scss']
})
export class Box4Component implements OnInit {

  constructor() { }

  inputData = [
    [
      {
        name: 'mobile',
        value: '',
        title: 'Mobile',
      },
      {
        name: 'email',
        value: '',
        title: 'Contract email',
      },
      {
        name: 'fax',
        value: '',
        title: 'Fax',
      }
    ],
    [
      {
        name: 'city',
        value: '',
        title: 'Province/City',
      },
      {
        name: 'district',
        value: '',
        title: 'District',
      }
    ],
    [
      {
        name: 'dddress',
        value: '',
        title: 'Address',
      },
      null
    ]
  ]

  ngOnInit() {
  }

  onChange(event: any) {
    console.log({ event })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.scss']
})
export class Box2Component implements OnInit {
  dates = [
    {
      title: 'Start date',
      id: "start_date"
    },
    {
      title: 'End date',
      id: "end_date"
    }
  ]

  tableData = {
    headers: [
      {
        label: "Company",
        key: "company",
        style: "",
      },
      {
        label: "Contact",
        key: "contact",
        style: "",
      },
      {
        label: "Country",
        key: "country",
        style: "",
      }
    ],
    rows: [
      {
        id: 1,
        company: "Alfreds Futterkiste",
        contact: "Alfreds Futterkiste",
        country: "Alfreds Futterkiste"
      },
      {
        id: 2,
        company: "Alfreds Futterkiste",
        contact: "Alfreds Futterkiste",
        country: "Alfreds Futterkiste"
      },
      {
        id: 3,
        company: "Alfreds Futterkiste",
        contact: "Alfreds Futterkiste",
        country: "Alfreds Futterkiste"
      },
      {
        id: 4,
        company: "Alfreds Futterkiste",
        contact: "Alfreds Futterkiste",
        country: "Alfreds Futterkiste"
      },
      {
        id: 5,
        company: "Alfreds Futterkiste",
        contact: "Alfreds Futterkiste",
        country: "Alfreds Futterkiste"
      },
      {
        id: 6,
        company: "Alfreds Futterkiste",
        contact: "Alfreds Futterkiste",
        country: "Alfreds Futterkiste"
      },
      {
        id: 7,
        company: "Alfreds Futterkiste",
        contact: "Alfreds Futterkiste",
        country: "Alfreds Futterkiste"
      },
    ]
  }
  constructor() { }

  ngOnInit() {
  }

  onCheckAllEvent(eventData: any) {
    console.log({ eventData })
  }

}

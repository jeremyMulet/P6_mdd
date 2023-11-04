import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    cards = [
        { title: 'Card 1', content: 'Content for Card 1' },
        { title: 'Card 2', content: 'Content for Card 2' },
        { title: 'Card 3', content: 'Content for Card 3' },
        { title: 'Card 4', content: 'Content for Card 4' }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}

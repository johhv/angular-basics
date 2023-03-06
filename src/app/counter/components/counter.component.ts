import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Inline counter</h1>
    <p>this one</p>
    <h3>{{ counter }}</h3>

    <button (click)="increaseBy()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy()">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}

  counter: number = 10;

  increaseBy(): void {
    this.counter += 1;
  }

  decreaseBy(): void {
    this.counter -= 1;
  }

  reset() {
    this.counter = 10;
  }
}

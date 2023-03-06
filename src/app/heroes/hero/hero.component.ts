import { Component } from '@angular/core';

@Component({
  selector: 'heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  name = 'ironman';
  age = 45;

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    this.name = 'Hulk';
  }

  changeAge() {
    this.age = 20;
  }

  defaultHero() {
    this.name = 'ironman';
    this.age = 45;
  }
}

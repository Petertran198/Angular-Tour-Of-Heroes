import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HEROES } from 'src/app/data/mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //Means be hero | undefined
  selectedHero?: Hero;
  heroes: Hero[] = HEROES;

  constructor() {}

  ngOnInit(): void {}
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

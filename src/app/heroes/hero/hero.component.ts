import { Component } from '@angular/core';
import { raceWith } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Iron Man';
  public age:number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeName(nwName:string):void {
    this.name = nwName;
  }

  changeAge(nwAge:number):void {
    this.age = nwAge;
  }

  reset():void {
    this.name = 'Iron Man';
    this.age = 45;
    document.querySelector('h1')!.innerText = 'Desde Angular';
  }
  
}

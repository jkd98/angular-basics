import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import generarId from '../helpers/generarId';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters:Character[] = [
    {
      id:generarId(),
      name:'Krillin',
      power:900
    },
    {
      id:generarId(),
      name:'Goku',
      power:10000
    },
    {
      id:generarId(),
      name:'Vegeta',
      power:8500
    }
];

constructor() { }

onNewCharcater( character:Character ):void {
    this.characters.push(character);
}

onDeleteCharacter( id:Character['id'] ):void {
    //const nwCharacters:Character[] = this.characters.splice(index,1);
    const nwCharacters:Character[] = this.characters.filter((char:Character)=>char.id!==id);
    //console.log({'deleted':nwCharacters});
    this.characters = nwCharacters;
}
}

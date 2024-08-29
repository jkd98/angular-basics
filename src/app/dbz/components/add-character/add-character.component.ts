import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import generarId from '../../helpers/generarId';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    id:'',
    name:'',
    power:0
  };

  emitCharacter():void {
    if(this.character.name.length === 0) return;
    
    this.character.id = generarId();
    this.onNewCharacter.emit(this.character);

    this.character = { id:'',name:'',power:0 };
  }

}

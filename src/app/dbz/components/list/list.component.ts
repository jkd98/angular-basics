import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

import generarId from '../../helpers/generarId';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [
    {
      id:generarId(),
      name:'NAME',
      power:0.0
    }
  ];

  @Output()
  public onDeleteIndex:EventEmitter<Character["id"]> = new EventEmitter();

  onDelete(id:Character["id"]):void {
    //console.log(index);
    this.onDeleteIndex.emit(id);
    
  }


  
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list-dbz.component.html',
  styleUrls: ['./list-dbz.component.css']
})
export class ListDbzComponent implements OnInit {


  @Input()
  public characterList: Character[] = [

  ];

  @Output()
  public onDeleteId:EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?:string):void {
    console.log({id});

      if( !id ) return;

    this.onDeleteId.emit(id);

  }

  constructor() { }

  ngOnInit() {
  }

}

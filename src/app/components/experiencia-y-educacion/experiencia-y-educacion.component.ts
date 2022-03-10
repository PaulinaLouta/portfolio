import { Component, OnInit, Input } from '@angular/core';
import { ItemExp } from '../item-exp';
import { EXPERIENCIAS } from '../mock-exp';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  @Input() titleText: string = "";
  
  experiencias: ItemExp[] = EXPERIENCIAS;
  
  constructor() { }

  ngOnInit(): void {
  }


}

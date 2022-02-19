import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  @Input() titleText: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}

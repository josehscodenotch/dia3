import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../model/ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit 
{
  public ciudades: Ciudad[];

  constructor() 
  {  
    // this.ciudades = [];
    this.ciudades = [
      new Ciudad("Sagres", "Portugal", "SAG"),
      new Ciudad("Madrid", "España", "MAD"),
      new Ciudad("Sidney", "Australia", "SID"),
     new Ciudad("Mejico", "Mejico", "MEJ")
    ]
  }
 
  ngOnInit(): void 
  {
  
  }


}

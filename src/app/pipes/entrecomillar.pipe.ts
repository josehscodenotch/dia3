import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'entrecomillar'
})
export class EntrecomillarPipe implements PipeTransform 
{

  transform(value: string): string 
  {
    let result: string;
    result = "\""+ value + "\"";

    return result;
  }

}

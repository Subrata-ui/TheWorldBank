import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTitle'
})
export class NameTitlePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if (gender == "male")
        return "Mr. " + value;
    else
        return "Miss. " + value;
  }

}

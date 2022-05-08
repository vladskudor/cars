import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform{
  transform(marks , value): any{
    return marks.filter((car) => {
      return car.name.toLowerCase().includes(value);
    });
  }

}

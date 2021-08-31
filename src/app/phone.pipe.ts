import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(rawNum:string) {
    rawNum = rawNum;

    const countryCodeStr = rawNum.slice(0,3);
    const areaCodeStr = rawNum.slice(3,6);
    const midSectionStr = rawNum.slice(6,10);
    return `(${countryCodeStr}) ${areaCodeStr} - ${midSectionStr}`;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeURI',
})
export class EncodeUriPipe implements PipeTransform {
  transform(value: string): string {
    return encodeURIComponent(value);
  }
}

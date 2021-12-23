import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'description' })
export class Description implements PipeTransform {
  transform(text: string, number: number): string {
    if (text.length > number) {
      return text.substr(0, number) + '...';
    }
    return text;
  }
}

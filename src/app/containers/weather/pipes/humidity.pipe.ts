import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'humidity' })
export class HumidityPipe implements PipeTransform {
  transform(value: number): string {
    return `${ value } %`;
  }
}
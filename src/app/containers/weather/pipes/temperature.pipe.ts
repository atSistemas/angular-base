import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
  public transform (value: number): string {
    return `${ value } °C`
  }
}

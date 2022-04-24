import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  transform( argument: boolean ): string {

    return ( argument ) ? 'vuela' : 'no vuela';

  }

}

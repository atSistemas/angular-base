import { Pipe } from '@angular/core';

@Pipe({
    name: 'prettyjson'
})

export class PrettyJsonPipe {
    transform(val) {
        console.log(val);

        return JSON.stringify(val, null, 2)
            .replace(' ', '&nbsp;')
            .replace('\n', '<br/>');
    }
}
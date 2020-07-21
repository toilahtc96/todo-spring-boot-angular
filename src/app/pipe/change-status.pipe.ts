import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'changeStatusPipe' })
export class ChangeStatusPipe implements PipeTransform {
    transform(value: string): string {
        if (new String(value).valueOf() == new String('true').valueOf()) {
            return 'Success';
        }
        return 'Pending';
    }
}
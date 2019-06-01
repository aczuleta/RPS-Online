import { trigger, transition, state, animate, style } from '@angular/animations';

export let fade = trigger('fade', [
    //state(),
    transition(':enter, :leave', [
        style({
            opacity: 0
        }),
        animate(350, style({
            opacity: 1
        }))
    ])
]);
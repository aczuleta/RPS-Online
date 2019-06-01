import { trigger, transition, state, animate, style, stagger, query, keyframes } from '@angular/animations';

export let prizeAnimation = trigger('prizeAnimation', [
    transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('400ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
            ]))
        ]))
    ])
]);
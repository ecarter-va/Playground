import {
    animate,
    trigger,
    style,
    transition,
    state,
    animation
} from '@angular/animations';

export const MoveonClick = trigger('MoveonClick', [
    state('isLeft', style({
      left: '0px'
    })),
    state('isRight', style({
      left: '100px'

    })),
    transition('isLeft <=> isRight', animate('3s ease-in-out'))
]);


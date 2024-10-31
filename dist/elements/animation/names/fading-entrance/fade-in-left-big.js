import { register } from '../register.js';

register('fade-in-left-big', [
  { offset: 0, opacity: '0', transform: 'translate3d(-2000px, 0, 0)' },
  { offset: 1, opacity: '1', transform: 'translate3d(0, 0, 0)' }
]);

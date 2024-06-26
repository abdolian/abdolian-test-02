import { HTMLPlusElement } from '../../types/index.js';
import { host } from './host.js';

/**
 * Indicates whether the [Direction](https://mdn.io/css-direction)
 * of the element is `Right-To-Left` or `Left-To-Right`.
 */
export const direction = (target: HTMLElement | HTMLPlusElement): 'ltr' | 'rtl' => {
  return getComputedStyle(host(target)).getPropertyValue('direction') as any;
};

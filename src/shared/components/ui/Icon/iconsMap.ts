import Arrow  from '@assets/img/icons/arrow.svg?react';
import Burger from '@assets/img/icons/burger.svg?react';
import Cart from '@assets/img/icons/cart.svg?react';
import Cross from '@assets/img/icons/cross.svg?react';
import Heart from '@assets/img/icons/heart.svg?react';
import Home from '@assets/img/icons/home.svg?react';
import Minus from '@assets/img/icons/minus.svg?react';
import Plus from '@assets/img/icons/plus.svg?react';

import { IconNames } from './IconNames';

export const icons: Record<
IconNames,
React.FC<React.SVGProps<SVGSVGElement>>
> = {
  [IconNames.Arrow]: Arrow,
  [IconNames.Home]: Home,
  [IconNames.Cross]: Cross,
  [IconNames.Burger]: Burger,
  [IconNames.Cart]: Cart,
  [IconNames.Heart]: Heart,
  [IconNames.Minus]: Minus,
  [IconNames.Plus]: Plus,
};

export type IconName = keyof typeof icons;

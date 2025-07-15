import Heart from '@assets/img/icons/heart.svg?react';
import HeartFulfilled from '@assets/img/icons/heart_fulfilled.svg?react';
import { selectFavoriteItems } from '@features/favorites/favorites.selectors';
import { toggleFavorite } from '@features/favorites/favoritesSlice';
import { normalizeProductType } from '@shared/helpers/normalizeProductType';
import { Product } from '@shared/types/Product';
import { ProductDetails } from '@shared/types/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';

import styles from './FavoriteButton.module.scss';

type Props = {
  product: Product | ProductDetails;
  size?: 40 | 48;
};

export const FavoriteButton: React.FC<Props> = ({ product, size = 40 }) => {
  const sizeClass = size === 40 ? styles.size40 : styles.size48;
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteItems);
  const normalized = normalizeProductType(product);

  const handleAddToFavorites = () => {
    if (product) {
      dispatch(toggleFavorite(normalized));
    }
  };

  const isFavorite = favoriteItems.some(item => item.id === normalized.id);

  return (
    <button
      className={`${styles.favoriteButton} ${sizeClass} ${isFavorite ? styles.isFavorite : ''}`}
      onClick={handleAddToFavorites}
    >
      {isFavorite ? <HeartFulfilled /> : <Heart />}
    </button>
  );
};

import { Link } from 'react-router-dom';

import { Divider } from '@shared/components/ui/Divider';
import { FavoriteButton } from '@shared/components/ui/FavoriteButton';
import { PrimaryButton } from '@shared/components/ui/PrimaryButton';
import { Product } from '@shared/types/Product';

import styles from './ProductCard.module.scss';

type Props = {
  product: Product;
  showDiscount?: boolean;
};

export const ProductCard: React.FC<Props> = ({ product, showDiscount }) => {
  return (
    <div className={styles.productCard}>
      <Link
        className={styles.imageWrapper}
        to={`/${product.category}/${product.itemId}`}
      >
        <img alt={product.name} className={styles.image} src={product.image} />
      </Link>

      <div className={styles.productInfo}>
        <Link
          className={styles.title}
          to={`/${product.category}/${product.itemId}`}
        >
          {product.name}
        </Link>

        <div className={styles.priceWrapper}>
          <p className={styles.productPrice}>${product.price}</p>

          {showDiscount && (
            <p className={styles.productDiscount}>{`$${product.fullPrice}`}</p>
          )}
        </div>

        <Divider />

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureName}>Screen</span>
            <span className={styles.featureValue}>{product.screen}</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureName}>Capacity</span>
            <span className={styles.featureValue}>{product.capacity}</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureName}>RAM</span>
            <span className={styles.featureValue}>{product.ram}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <PrimaryButton product={product} variant="add" />

          <FavoriteButton product={product} />
        </div>
      </div>
    </div>
  );
};

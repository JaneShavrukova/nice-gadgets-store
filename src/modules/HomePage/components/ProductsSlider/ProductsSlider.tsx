import 'swiper/css/navigation';
import 'swiper/css';

import { ProductCard } from '@shared/components/layout/ProductCard';
import { Icon } from '@shared/components/ui/Icon/Icon';
import { IconNames } from '@shared/components/ui/Icon/IconNames';
import { Product } from '@shared/types/Product';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './ProductsSlider.module.scss';

type Props = {
  title: string;
  products: Product[];
  showDiscount?: boolean;
};

export const ProductsSlider: React.FC<Props> = ({
  title,
  products,
  showDiscount,
}) => {
  const navigationPrevId = `prev-${title.replace(/\s+/g, '-')}`;
  const navigationNextId = `next-${title.replace(/\s+/g, '-')}`;

  return (
    <>
      <div className={styles.topWrapper}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.navButtons}>
          <div className={styles.sliderButtonPrev} id={navigationPrevId}>
            <Icon className={styles.prevArrow} name={IconNames.Arrow} />
          </div>
          <div className={styles.sliderButtonNext} id={navigationNextId}>
            <Icon name={IconNames.Arrow} />
          </div>
        </div>
      </div>

      <Swiper
        className={styles.swiper}
        modules={[Navigation]}
        navigation={{
          prevEl: `#${navigationPrevId}`,
          nextEl: `#${navigationNextId}`,
          disabledClass: styles.lockedButton,
        }}
        slidesPerView={4}
        spaceBetween={16}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className={styles.swiperSlide}>
            <ProductCard product={product} showDiscount={showDiscount} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

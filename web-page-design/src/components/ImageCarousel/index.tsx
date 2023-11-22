import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import image1 from '../../assets/swiper_slide_1.jpg';
import image2 from '../../assets/swiper_slide_2.jpg';
import { CarouselRef } from 'antd/lib/carousel';

const ImageCarousel = () => {
  const slider = useRef<CarouselRef>(null);

  const CustomPrevArrow = () => {
    return (
      <div
        className="custom-arrow custom-prev-arrow"
        onClick={() => slider.current?.prev()}
      >
        <LeftOutlined />
      </div>
    );
  };

  const CustomNextArrow = () => {
    return (
      <div
        className="custom-arrow custom-next-arrow"
        onClick={() => slider.current?.next()}
      >
        <RightOutlined />
      </div>
    );
  };

  const customArrows = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...customArrows,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Carousel
      ref={slider}
      {...carouselSettings}
      className="custom-carousel-container"
    >
      <div>
        <img
          src={image1}
          alt="Image 1"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src={image2}
          alt="Image 2"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;

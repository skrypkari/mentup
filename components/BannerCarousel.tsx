import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Banner from './Banner';

const BannerCarousel = () => {
  const banners = [
    {
      text1: "При покупке кальяна мы дарим полтора часа игры в ПС5 абсолютно бесплатно!",
      text2: "Работаем круглосуточно, без выходных!",
      text3: "Для первых 5 человек вся премиум и стандарт зона бесплатно на всю ночь.",
      imageSrc: "/banner.png",
      buttonText: "ЗАБРОНИРОВАТЬ"
    },
    {
      text1: "Специальное предложение для студентов - скидка 20% в будние дни!",
      text2: "Действует при предъявлении студенческого билета",
      text3: "Акция действует до конца месяца",
      imageSrc: "/banner.png",
      buttonText: "ЗАБРОНИРОВАТЬ"
    },
    {
      text1: "Турнир по CS2 каждую субботу! Призовой фонд 50,000 рублей",
      text2: "Регистрация команд уже открыта",
      text3: "Количество мест ограничено",
      imageSrc: "/banner.png",
      buttonText: "УЧАСТВОВАТЬ"
    }
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <Banner {...banner} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerCarousel;
import { Check } from 'lucide-react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const features = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Nulla sit amet velit nec nulla suscipit ultrices.',
  'Vestibulum euismod, libero nec fermentum.',
];
export default function ImageSection({ data }) {
  const pagination = {
    clickable: true,
  };
  const autoplay = {
    delay: 4000,
    disableOnInteraction: false,
  };

  return (
    <div
      className={`mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0 md:max-w-screen-lg  justify-between md:gap-7`}
    >
      <div className={`flex flex-col justify-center ${data.reverse ? 'md:order-2' : 'md:order-1'}`}>
        <h6 className="py-3 text-xs font-semibold text-orange-600 md:text-base">
          {data.title}
        </h6>
        <h1 className="pb-7 text-4xl font-bold text-blue-700 md:text-5xl lg:text-7xl">
          {data.subtitle}
        </h1>
        <p className="pb-6 text-xs font-normal text-gray-400 md:text-sm lg:text-base">
          {data.description}
        </p>
        <ul>
          {data.features.map((data, index) => (
            <li className="flex items-center py-1 text-xs font-normal text-gray-400 md:text-sm lg:text-base">
              <Check strokeWidth={3} className="mx-2 text-primary" />
              {data.trim()}
            </li>
          ))}
        </ul>
        <button
          className={`${data.buttonBgColor} ${data.reverse ? 'self-end' : 'self-start'} mt-8 rounded-md p-4 text-sm text-white transition-all md:mt-4 lg:mt-14`}
        >
          {data.button}
        </button>
      </div>
      <div className={`${data.reverse ? 'md:order-1' : 'md:order-2'}`}>
        {data.image.length === 1 ? (
          <img src={data.image[0]} className="h-full w-full object-cover" />
        ) : (
          <Swiper
            pagination={pagination}
            autoplay={autoplay}
            modules={[Pagination, Autoplay]}
            style={{
              paddingBottom: '2rem',
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
            className="h-full object-cover"
            slidesPerView={1}
          >
            {data.image.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <img src={imgSrc} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

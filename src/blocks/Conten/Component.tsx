"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Card {
  title: string;
  Paragraph: string;
  authorName?: string;
  logo?: {
    url: string;
    alt?: string;
  };
}

interface ContentComponentBlock {
  cards: Card[];
}

export const ConteComponent = ({ cards }: ContentComponentBlock) => {

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={30}
          slidesPerView={3}
         
          className="w-full py-12 px-6"
        >
          {cards?.map((card, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                    {card.Paragraph}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-auto pt-4">
                  {card.logo?.url && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={card.logo.url}
                        alt={card.logo.alt || "Author"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {card.authorName && (
                    <span className="font-bold text-gray-900 text-sm">
                      - {card.authorName}
                    </span>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
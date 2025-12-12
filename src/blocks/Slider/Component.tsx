"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';
import RichText from "@/components/RichText";

interface MediaItem {
    media: {
        url: string;
        alt?: string;
    };
}

interface SliderBlock {
    sliders: MediaItem[];
    richText: any;


}

export const Slider: React.FC<SliderBlock> = ({ sliders, richText }) => {


    if (!sliders || sliders.length === 0) return null;

    return (

        <>
            {richText && <RichText className="mb-0 text-red-700 text-center" data={richText} enableGutter={false} />}

            <Swiper

                modules={[Navigation, Autoplay]}

                navigation
                autoplay={{ delay: 3000 }}
                loop
                className="w-[1200px] h-[500px]"


            >


                {sliders.map((item, index) => {
                    const file = item.media;
                    if (!file) return null;

                    return (
                        <SwiperSlide key={index} >
                            <div className="w-full h-[500px]   relative overflow-hidden">
                                <Image
                                    width={600}
                                    height={600}
                                    src={file.url}
                                    alt={file.alt || "Slider image"}
                                    className="w-full h-full "
                                />
                            </div>

                        </SwiperSlide>
                    );
                })}


            </Swiper >
        </>
    )
}
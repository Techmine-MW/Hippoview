"use client";

import ImageFallback from "@/helpers/ImageFallback";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const ConferenceRoomPageHeaderImages = ({ data }: any) => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        style={
          {
            "--swiper-navigation-color": "#233F80",
          } as React.CSSProperties
        }
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {data.map((picture: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="mb-0">
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                <ImageFallback
                  src={picture.url}
                  height={100}
                  width={100}
                  alt={picture.alt}
                  className="w-full h-full object-cover rounded"
                />
              </LightGallery>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ConferenceRoomPageHeaderImages;

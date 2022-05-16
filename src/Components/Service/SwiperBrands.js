import React from 'react'
import { BrandWrapper } from './ServiceWrapp'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay } from "swiper";

const SwiperBrands = () => {

    return (
        <BrandWrapper >
            <div className="container">
                <h1 >Наши партнеры</h1>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={70}
                slidesPerGroup={1}
                speed={3500}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination,]}
                className="mySwiper "
            >
                <SwiperSlide>
                    <div className="sw-brand">
                        <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Vaillant-logo-2021.svg/1280px-Vaillant-logo-2021.svg.png" alt="logobrands" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="sw-brand">
                        <img className=" " src="https://www.sinicon.net/img/logo.png" alt="logobrands" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sw-brand">
                        <img className=" " src="https://img.bizorg.su/goods/f5e/4a1/f5e4a1a1380c_1.png" alt="logobrands" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="sw-brand">
                        <img className="w-100 " src="https://www.linear.eu/fileadmin/_processed_/0/2/csm_Henco-logo-Quadri-2014-SRGB_d85a6294bd.png" alt="logobrands" />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="sw-brand">
                        <img className="" src="https://groupe-els.fr/wp-content/uploads/2021/01/logo-chaffoteaux-1.png" alt="logobrands" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sw-brand">
                        <img className="rounded-pill" src="https://logos-download.com/wp-content/uploads/2016/04/Grohe_blue_logo.jpg" alt="logobrands" />
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div className="container ">
                <div className="row bg-white align-items-center">
                    <div className="col-2 ">
                        <img className="w-100 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Vaillant-logo-2021.svg/1280px-Vaillant-logo-2021.svg.png" alt="logobrands" />
                    </div>
                   
                    <div className="col-2 ">
                        
                    </div>
                    <div className="col-2 ">
                       
                    </div>
                    <div className="col-2 ">
                        
                    </div>
                    <div className="col-2 ">
                       
                    </div>
                    <div className="col-2 ">
                       
                    </div>
                </div>
            </div> */}
        </BrandWrapper >
    )
}

export default SwiperBrands
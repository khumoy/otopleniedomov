import React from 'react'
import { BrandWrapper } from './ServiceWrapp'
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';


const SwiperBrands = () => {

    return (
        <BrandWrapper>
            <div className="container ">
                <h1 >Наши партнеры</h1>
                <div className="row bg-white align-items-center">
                    <div className="col-2 ">
                        <img className="w-100 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Vaillant-logo-2021.svg/1280px-Vaillant-logo-2021.svg.png" alt="logobrands" />
                    </div>
                    {/* <div className="col-2 ">
                        <img className="w-100 h-100" src="https://cdn.worldvectorlogo.com/logos/viessmann-logo.svg" alt="logobrands" />
                    </div> */}
                    <div className="col-2 ">
                        <img className="w-100 h-100" src="https://img.bizorg.su/goods/f5e/4a1/f5e4a1a1380c_1.png" alt="logobrands" />
                    </div>
                    <div className="col-2 ">
                        <img className="w-100 " src="https://www.linear.eu/fileadmin/_processed_/0/2/csm_Henco-logo-Quadri-2014-SRGB_d85a6294bd.png" alt="logobrands" />
                    </div>
                    <div className="col-2 ">
                        <img className="w-100 " src="https://groupe-els.fr/wp-content/uploads/2021/01/logo-chaffoteaux-1.png" alt="logobrands" />
                    </div>
                    <div className="col-2 ">
                        <img className="w-100 " src="https://www.sinicon.net/img/logo.png" alt="logobrands" />
                    </div>
                    <div className="col-2 ">
                        <img className="w-100 " src="https://sanmix.net.ua/image/cache/catalog/brend-foto/logo-GROHE-400x400_0.png" alt="logobrands" />
                    </div>
                </div>
            </div>
        </BrandWrapper>
    )
}

export default SwiperBrands
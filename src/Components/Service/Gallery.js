import React from 'react'
import { GalleryWrapp } from './ServiceWrapp'
import photo1 from '../../images-plumb/dush.jpg'
import photo2 from '../../images-plumb/sanuzl.jpg'
import photo3 from '../../images-plumb/kran.jpg'
import photo4 from '../../images-plumb/sushka.jpg'
import { SRLWrapper } from 'simple-react-lightbox'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaMobileAlt, FaMapMarkedAlt, FaFileSignature, FaClock } from 'react-icons/fa'
import { Fade, Zoom } from 'react-reveal'
import SwiperBrands from './SwiperBrands'

const Gallery = () => {

    const data = [
        {
            src: photo1,
            id: 1

        },
        {
            src: photo2,
            id: 2
        },
        {
            src: photo3,
            id: 3
        },
        {
            src: photo4,
            id: 4
        },
    ]

    return (
        <>

            {/* section help */}
            <div className="service-help-container ">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center">
                        <Zoom>
                            <div className=" col-10 col-sm-5 offset-md-0 col-md-4 col-lg-3">
                                <div className="text-center service-help ">
                                    <span ><FaMobileAlt className="service-icon service-icon-help" /></span>
                                    <p>Вы оставляете заявку по тел.
                                        <a className="btn btn-danger" href="tel:+998 99 4058046">+998 99 4058046</a>
                                    </p>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className=" col-10 col-sm-5 offset-md-0 col-md-4 col-lg-3 ">
                                <div className="text-center service-help ">
                                    <span ><FaMapMarkedAlt className="service-icon service-icon-help" /></span>
                                    <p>Мы приезжаем к вам и составляем смету работ.</p>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className=" col-10 col-sm-5 offset-md-0 col-md-4 col-lg-3 ">
                                <div className="text-center service-help">
                                    <span ><FaFileSignature className="service-icon service-icon-help" /></span>
                                    <p>Заключаем договор и покупаем весь необходимый материал.</p>
                                </div>
                            </div>
                        </Zoom>
                        <Zoom>
                            <div className=" col-10 col-sm-5 offset-md-0 col-md-4 col-lg-3 ">
                                <div className="text-center service-help">
                                    <span ><FaClock className="service-icon service-icon-help" /></span>
                                    <p >Работа выполняется в тот же день, или в любое другое время</p>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
            <SRLWrapper>
                <GalleryWrapp>
                    <div className="container py-4  ">
                        <h1 className='text-center '>Примеры работ наших сантехников</h1>
                        <div className="row p-4">
                            {data.map((item) => (
                                <Fade right>
                                    <div key={item.id} className=" offset-1 col-10 col-sm-10 offset-md-0 col-md-6 col-lg-3 colls ">
                                        <div className="w-100 h-100 gallery ">
                                            <img className=" gallerys-image w-100 h-100" src={item.src} alt="" />
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                        <div className="text-center pt-3">
                            <Link className='btn btn-danger' to='/photos'>
                                Еще <FaArrowAltCircleRight />
                            </Link>
                        </div>
                    </div>

                </GalleryWrapp>
            </SRLWrapper>
            <SwiperBrands />
        </>

    )
}

export default Gallery

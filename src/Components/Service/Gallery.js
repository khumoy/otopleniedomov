import React from 'react'
import { GalleryWrapp } from './ServiceWrapp'
import photo1 from '../../images-plumb/dush.jpg'
import photo2 from '../../images-plumb/sanuzl.jpg'
import photo3 from '../../images-plumb/kran.jpg'
import photo4 from '../../images-plumb/sushka.jpg'
import { SRLWrapper } from 'simple-react-lightbox'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'


const Gallery = () => {

    const data = [
        {
            src: photo1
        },
        {
            src: photo2
        },
        {
            src: photo3
        },
        {
            src: photo4
        },
    ]

    return (
        <SRLWrapper>
            <GalleryWrapp>
                <div className="container py-4">
                    <h1>Примеры работ наших сантехников</h1>
                    <div className="row ">
                        {data.map((item, index) => (
                            <div key={index} className=" offset-1 col-10 col-sm-10 offset-md-0 col-md-6 col-lg-3 colls ">
                                <div className="w-100 h-100 gallery ">
                                    <img className=" gallerys-image w-100 h-100" src={item.src} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center pt-5">
                        <Link to='/photos'>
                            Еще <FaArrowAltCircleRight />
                        </Link>
                    </div>
                </div>
            </GalleryWrapp>
        </SRLWrapper>
    )
}

export default Gallery

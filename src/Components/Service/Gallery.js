import React from 'react'
import { GalleryWrapp } from './ServiceWrapp'
import photo1 from '../../images-plumb/dush.jpg'
import photo2 from '../../images-plumb/sanuzl.jpg'
import photo3 from '../../images-plumb/kran.jpg'
import photo4 from '../../images-plumb/sushka.jpg'
import { SRLWrapper } from 'simple-react-lightbox'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { Zoom, Fade } from 'react-reveal'

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
                    <h1 className='text-center'>Примеры работ наших сантехников</h1>
                    <div className="row p-4">
                        {data.map((item, index) => (
                            <Fade right>
                                <div key={index} className=" offset-1 col-10 col-sm-10 offset-md-0 col-md-6 col-lg-3 colls ">
                                    <div className="w-100 h-100 gallery ">
                                        <img className=" gallerys-image w-100 h-100" src={item.src} alt="" />
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                    <div className="text-center pt-5">
                        <Link to='/photos'>
                            Еще <FaArrowAltCircleRight />
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row p-4">
                        <div className="service-title px-3">
                            <Zoom >
                                <p>
                                    Мы работаем с гарантией качества и предоставляем доступную цену! Обратившись к нам по любому вопросу, будьте уверены, что все будет выполнено на самом высоком уровне без завышения стоимости и скрытых платежей. В нашем каталоге услуг вы найдете полный перечень наших возможностей, а если чего то нет, — позвоните, мы уверены, что сможем решить поставленную задачу. С уважением, сотрудники сервис центра <b><em>“ОТОПЛЕНИЕ-ДОМОВ ЧИРЧИК”</em></b>.
                                </p>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </GalleryWrapp>
        </SRLWrapper>
    )
}

export default Gallery

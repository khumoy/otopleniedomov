import React from 'react'
import { ServiceWrapp } from './ServiceWrapp'
import { BiChevronRight } from 'react-icons/bi'

import Gallery from './Gallery'
import { Zoom, Fade } from 'react-reveal'
import Ourservice from './Ourservice'
const Service = () => {

    return (
        <ServiceWrapp>
            <Ourservice />
            <div className="service-content ">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <Fade left>
                            <div className=" col-10 col-sm-9 offset-md-0 col-md-9 col-lg-12">
                                <div className="text-center service-item ">
                                    <h1>Наши услуги</h1>
                                    <p>Все работы выполняются опытными специалистами. Работа по договору, гарантия до 3 лет. <br />
                                        <span> Звоните: <a href="tel: +998 99 4058046"> +998 99 4058046</a></span>
                                    </p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="row mb-2 py-5 justify-content-center">
                        <Fade left>
                            <div className=" col-10 col-sm-9 offset-md-0 col-md-6 col-lg-4 order-2 order-lg-0 mt-4 mt-lg-0">
                                <div className="service-item-group h-100">
                                    <h3>Отопление</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item"> <BiChevronRight className="service-icon" />Газовые котлы</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" />Электрические котлы</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" /> Теплые полы</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" /> Монтаж котельной</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" /> Батареи отопления</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" />  Монтаж отопления в квартирах и домах</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Zoom>
                            <div className=" col-10  col-sm-9 offset-md-0 col-md-6  col-lg-4 mt-4 mt-lg-0 service-item-image" >
                                <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://i.pinimg.com/736x/06/48/c2/0648c200a7a1e8f9a9eab3a6a3bf523d.jpg" alt="" />
                            </div>
                        </Zoom>
                        <Fade right>
                            <div className="col-10  col-sm-9 offset-md-0 col-md-6 col-lg-4 mt-4 mt-lg-0">
                                <div className="service-item-group h-100">
                                    <h3>Ремонт и замена сантехники</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item"> <BiChevronRight className="service-icon" /> Монтаж и замена труб</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" /> Замена и ремонт смесителей</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" /> Установка раковин и унитазов</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" /> Установка и монтаж душевых кабин</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" /> Установка водонагревателя</li>
                                        <li className="list-group-item"><BiChevronRight className="service-icon" /> Установка и монтаж ванны</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* <div className="container pb-5 container-plumb ">
                    <div className="row px-4 justify-content-center">
                        <div className="service-title px-3 col-10 col-md-6">
                            <p>
                                Для наших профессиональных сантехников нет слишком больших или слишком маленьких работ. Каждый наш сантехник в нашей семейной компании был профессионально обучен и проверен для обеспечения вашей безопасности. Вы можете ожидать, что наш техник подойдет к вашей двери аккуратно одетым с вежливой улыбкой. Обслуживание клиентов является нашим главным приоритетом!
                            </p>
                        </div>
                        <div className="col-10 col-md-6">
                            <img src="https://tradesmencosts.co.uk/wp-content/uploads/2020/11/plumber-fixing-sink.jpg" alt="" />
                        </div>
                    </div>
                </div> */}
                </div>
            </div>

            <Gallery />


        </ServiceWrapp >
    )
}

export default Service

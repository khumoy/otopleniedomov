import React from 'react'
import { ServiceWrapp } from './ServiceWrapp'
import { BiChevronRight } from 'react-icons/bi'
import { FaMobileAlt, FaMapMarkedAlt, FaFileSignature, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Gallery from './Gallery'
// import Catalog from './Catalog'
// import Sponsors from './Sponsors'

const Service = () => {

    return (
        <ServiceWrapp>
            <div className="container service-content py-5">
                <div className="row">
                    <div className="offset-1 col-10 col-sm-9 offset-md-0 col-md-9 col-lg-9">
                        <div className="text-center service-item ">
                            <h1>Наши услуги</h1>
                            <p>Все работы выполняются опытными специалистами. Работа по договору, гарантия до 3 лет. <br />
                                Звоните <Link to="tel: +998 99 4058046">+998 99 4058046</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mb-2 py-5">
                    <div className="offset-1 col-10 col-sm-9 offset-md-0 col-md-6 col-lg-4">
                        <div className="service-item-group">
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
                    <div className="offset-1 col-10  col-sm-9 offset-md-0 col-md-6 offset-lg-1 col-lg-4 ">
                        <div className="service-item-group">
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
                </div>
                <div className="container service-help-container pb-4">
                    <div className="row p-3 shadow mb-3">
                        <div className="offset-1 col-10 col-sm-5 offset-md-0 col-md-4 col-lg-3  ">
                            <div className=" text-center service-help">
                                <span ><FaMobileAlt className="service-icon service-icon-help" /></span>
                                <p>Вы оставляете заявку по тел.
                                </p>
                                <Link to="tel:+998 99 4058046">+998 99 4058046</Link>
                            </div>
                        </div>
                        <div className="offset-1 col-10 col-sm-5 offset-md-0 col-md-4 col-lg-3 ">
                            <div className="text-center service-help">
                                <span ><FaMapMarkedAlt className="service-icon service-icon-help" /></span>
                                <p>Мы приезжаем к вам и составляем смету работ.</p>
                            </div>
                        </div>
                        <div className="offset-1 col-10 col-sm-5 offset-md-0 col-md-4 col-lg-3 ">
                            <div className="text-center service-help">
                                <span ><FaFileSignature className="service-icon service-icon-help" /></span>
                                <p>Заключаем договор и покупаем весь необходимый материал.</p>
                            </div>
                        </div>
                        <div className="offset-1 col-10 col-sm-5 offset-md-0 col-md-4 col-lg-3 ">
                            <div className="text-center service-help">
                                <span ><FaClock className="service-icon service-icon-help" /></span>
                                <p >Работа выполняется в тот же день, или в любое другое время</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4  service-title text-center">
                    <p>Мы работаем с гарантией качества и предоставляем доступную цену! Обратившись к нам по любому вопросу, будьте уверены, что все будет выполнено на самом высоком уровне без завышения стоимости и скрытых платежей. В нашем каталоге услуг вы найдете полный перечень наших возможностей, а если чего то нет, — позвоните, мы уверены, что сможем решить поставленную задачу. С уважением, сотрудники сервис центра <b>“ASAF ЧИРЧИК”</b>.</p>
                </div>
            </div>
            <Gallery />
        </ServiceWrapp >
    )
}

export default Service

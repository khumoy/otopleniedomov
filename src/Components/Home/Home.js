import React from 'react'
import { Fade } from 'react-reveal';
import { HomeWrapp } from './HomeWrapp';


const Home = () => {


    return (
        <HomeWrapp>
            <div className="container ">
                <div className="row justify-content-start align-items-center" >
                    <Fade left>
                        <div className="offset-1 col-10 col-sm-10 offset-md-0 col-md-6 col-lg-8 text-center text-md-start p-3">
                            <div className="text-heating ">
                                <span>Отопление домов</span>
                                <h1>Поставляет Элитную Сантехнику </h1>
                                <span>для дома или бизнеса</span>

                            </div>
                            <a href="tel:+998994058046" className="btn btn-primary">
                                Контакты
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </HomeWrapp>
    )
}

export default Home

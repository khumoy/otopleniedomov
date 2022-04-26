import React from 'react'
import { HomeWrapp } from './HomeWrapp';


const Home = () => {


    return (
        <HomeWrapp>
            <div className="container ">
                <div className="row justify-conte align-items-center" >
                    <div className="offset-1 col-10 col-sm-10 offset-md-0 col-md-6 col-lg-6 text-center text-md-start p-3">
                        <div className="text-heating ">
                            <p>Отопление домов</p>
                            <h1>Поставляет Элитную Сантехнику </h1>
                            <p>для дома или бизнеса</p>

                        </div>
                        <a href="tel:+998994058046" className="btn btn-primary">
                            Контакты
                        </a>
                    </div>
                </div>
            </div>
        </HomeWrapp>
    )
}

export default Home

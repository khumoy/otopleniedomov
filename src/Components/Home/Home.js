import React from 'react'
import { HomeWrapp } from './HomeWrapp';


const Home = () => {
    return (
        <HomeWrapp>
            <div className="container h-75 ">
                <div className="row h-100 align-items-center pt-5" >
                    <div className="offset-1 col-10 col-sm-10 offset-md-0 col-md-6 col-lg-5 text-center text-md-start">
                        <div className="text-heating shadow">
                            <h1>Отопление домов</h1>
                            <button className="btn btn-primary">
                                Контакты
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </HomeWrapp>
    )
}

export default Home

import React from 'react'
import { Fade, Zoom } from 'react-reveal'
import { OurserviceWrapper } from './ServiceWrapp'

const Ourservice = () => {
    return (
        <OurserviceWrapper>
            <div className="container">
                <div className="row align-items-center">
                    <div className="p-4  text-center">
                        <Zoom>
                            <h1>Как мы можем тебе помочь <span className='text-white '>?</span></h1>
                        </Zoom>
                        <Fade right>
                            <p>Мы специализируемся на том, чтобы сделать плановое техническое обслуживание и аварийный ремонт беззаботными. Позвоните нам сегодня, чтобы узнать, насколько на самом деле прост наш процесс!</p>
                            <a className="btn btn-danger py-3 px-5" href='tel: +998994058046'>Позвонить</a>
                        </Fade>
                    </div>
                </div>
            </div>
        </OurserviceWrapper>
    )
}

export default Ourservice
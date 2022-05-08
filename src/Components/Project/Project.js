import React from 'react'
import { Fade } from 'react-reveal'
import { Container, ProjectWrapp } from './ProjectWrapp'

const Project = () => {

    const data = [
        {
            src: 'http://server-service.uz/wp-content/uploads/2020/10/53-kopirovat-300x200.jpg',
            title: 'Отопительные котлы'
        },
        {
            src: 'http://server-service.uz/wp-content/uploads/2020/10/14-300x200.jpg',
            title: 'Тепловые насосы'
        },
        {
            src: 'http://server-service.uz/wp-content/uploads/2020/10/bez-imeni-4-kopirovat-300x200.jpg',
            title: 'Отопление солнцем'
        },
        {
            src: 'http://server-service.uz/wp-content/uploads/2020/10/5235-kopirovat-300x200.jpg',
            title: 'Системы теплый пол'
        },
        {
            src: 'http://server-service.uz/wp-content/uploads/2020/10/573r-kopirovat-300x200.jpg',
            title: 'Радиаторы отопления'
        },
        {
            src: 'http://server-service.uz/wp-content/uploads/2020/10/adsq-kopirovat-300x200.jpg',
            title: 'Фанкойлы'
        },
    ]

    return (
        <>
            <ProjectWrapp>
                {/* <div className="text-center">
                    <h1 >Отопление</h1>
                </div> */}
            </ProjectWrapp>
            <Container>
                <div className="container content-title bg-white p-5">
                    <h1 >Отопление</h1>
                    <div className="row justify-content-center">
                        {data.map((items, index) => (
                            <Fade right>
                                <div key={index} className="col-12 col-sm-10 col-md-4 col-lg-4">
                                    <div className="image">
                                        <img className="img w-100" src={items.src} alt="" />
                                        <p>{items.title} </p>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                    <Fade left>
                        <div className="title">
                            <p>Тепло в доме – важная составляющая комфортной атмосферы. И сегодня существует немало способов наполнить окружающее пространство уютом. Для этого используются <b>отопительные котлы, тепловые насосы, радиаторы, фанкойлы, теплые полы</b>.</p>
                            <p>Компания <b><i>Отопление Домов</i></b> предлагает вам множество вариантов для создания благоприятной обстановки. Мы занимаемся не только монтажом, ремонтом и сервисным обслуживанием отопительного оборудования, но и можем доставить любые средства для отопления дома или офиса из-за рубежа по выгодным ценам.</p>
                            <p>Теперь проблема качественного обогрева комнат, нагрева воды на кухне или подогрева пола решена! Вы перестанете всецело зависеть от системы централизованного отопления и станете наслаждаться желанным теплом тогда, когда вам этого захочется!</p>
                            <p>Если вы хотите демонтировать старый отопительный котел, заменить радиатор или тепловой насос, установить фанкойл или электрический теплый пол, то мы готовы помочь.</p>
                            <h4 >Звоните, чтобы обговорить детали! <a href="tel:+998 99 4058046">+998 99 405-80-46</a></h4>
                        </div>
                    </Fade>
                </div>
            </Container>
        </>
    )
}

export default Project

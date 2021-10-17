import React from 'react'
import { useSelector } from 'react-redux';
import { SRLWrapper } from 'simple-react-lightbox';
import { CatalogWrapp } from './CatalogWrapp';




const Catalog = () => {

    const data = useSelector(state => state.gallery);
    const album = useSelector(state => state.photos);

    return (
        <>
            <SRLWrapper>

                <CatalogWrapp>
                    <div className="container pt-4">
                        <div className="row py-3 text-center justify-content-center">
                            <h1>Сантехнические услуги</h1>
                            {album.map((value, index) => (
                                <div key={index} className="col-3 col.sm-4 col-md-3 col-lg-2 m-2 ">
                                    <div className="w-100 h-75 image-content">
                                        <img className="images w-100 h-100 " src={value.src} alt="Котелные работы" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row py-3 text-center justify-content-center">
                            <h1>Котелные работы</h1>
                            {data.map((value, index) => (
                                <div key={index} className="col-3 col.sm-4 col-md-3 col-lg-2 m-2 ">
                                    <div className="w-100 h-75 image-content">
                                        <img className="images w-100 h-100 " src={value.kotelniy} alt="Котелные работы" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row py-4 justify-content-center text-center">
                            <h1>Теплый поль</h1>
                            {data.map((photos, index) => (
                                <div key={index} className="col-3 col.sm-4 col-md-3 col-lg-2 m-2 ">
                                    <div className="w-100 h-75 image-content">
                                        <img className="images w-100 h-100 " src={photos.pol} alt="Отопление" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CatalogWrapp>
            </SRLWrapper>
        </>
    )
}

export default Catalog

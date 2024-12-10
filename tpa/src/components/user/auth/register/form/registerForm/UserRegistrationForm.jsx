import React from 'react'
import './UserRegistrationForm.css'
import { CountrySelect } from '../../../../../common/CountrySelect/CountrySelect'
import { GenericSelect } from '../../../../../common/GenericSelect/GenericSelect'
import { useGetData } from '../../../../../../hooks/useGetData'
import { FetchData } from '../../registerControler'
// import { GenericComponent } from '../../../../../common/GenericComponent/GenericComponent'

export const UserRegistrationForm = () => {

    const { data } = useGetData(FetchData)

    // console.log('data from useGetData: ',data)

    return (

        <div className="form-container-interest">
            <form id="miFormulario" className="form-interest" action="">

                <a className="back" href="/"><i className="bi bi-arrow-left bi-className-back
            "></i>Volver</a>


                <div className="logo-interest">
                    <img src="../../../img/logo-colores-originales-sin-bajada.png" alt="logo" />
                </div>


                <h1 className="title-interest">Formulario de interés</h1>

                <p className="intro">Para que podamos contactarte a la brevedad y enviarte la información sobre la Formación
                    Profesional TPA® o cómo adquirir la Membresía Profesional TPA®, por favor completa el formulario con
                    tus datos personales.</p>

                <div className="first-question">
                    <div className="container mt-5 container-mt-5 mt-5-height container-mw">
                        <div className="mb-3 mb3-className form-floating select-container ">

                            <div className="div-fq">¿Realizó anteriormente La Formación
                                TPA®?</div>
                            {/* <select id="realizoFormacion" className="form-select form-control-height">
                                <option value="" disabled selected>¿Realizó anteriormente La Formación
                                    TPA®?</option>
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                            </select> */}

                            <GenericSelect  />

                        </div>
                    </div>


                    <div className="container mt-5 container-mt-5 cont-year mt-5-height">
                        <div className=" mb3-className-year select-container">

                        <div className="div-year">Año en que realizaste la Formación TPA®</div>

                            <GenericSelect  />

                        </div>
                    </div>
                </div>





                {/* <!-- "className="form-control is-invalid"" establece error de input --> */}


                <div className="datos-container">

                    <span className="address-title-datos">Datos Personales</span>

                    <div className="form-floating ">

                        <input type="text" className="form-control form-control-height" id="floatingInputNombre"
                            placeholder="Nombre" />
                        <label htmlFor="floatingInputNombre">Nombre/s</label>

                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control form-control-height" id="floatingLastName"
                            placeholder="Apellido" />
                        <label htmlFor="floatingLastName">Apellido/s</label>
                    </div>

                    <div className="dni">
                        <div className="form-floating selected1 select-container">
                            {/* <select className="form-select form-control-height">
                                <option value="" disabled selected>Tipo de Documento*</option>
                                <option value="1">DNI</option>
                                <option value="2">Pasaporte</option>
                                <option value="3">UE</option>
                            </select> */}

                            <GenericSelect  values={data?.[1]?.data || []} prop={'description'}/>

                        </div>
                        <div className="form-floating nro">
                            <input type="text" className="form-control form-control-height" id="floatingNro"
                                placeholder="Nro" />
                            <label htmlFor="floatingNro">Nro de Documento</label>
                        </div>
                    </div>


                </div>



                <div className="address-1">
                    <span className="address-title">Contacto</span>



                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="bi bi-envelope bi-className-Envelope"></i></span>

                        <div className="form-floating flex-grow-1">
                            <input type="text" className="form-control form-control-height" name="code1"
                                placeholder="Code 1" />
                            <label htmlFor="code1">Email</label>
                        </div>

                    </div>


                    <div className="address-1-container">
                        <div className="container mt-5-country mt-5">

                            <div className="mb-3 mb3-className-country select-container ">
                                {/* <select id="country2" className="form-select">
                                    <option value="" disabled selected>País</option>
                                    <option value="+54" data-flag="ar">(+54)</option>
                                    <option value="+1" data-flag="us">(+1)</option>
                                    <option value="+44" data-flag="gb">(+44)</option>
                                </select> */}
                                <CountrySelect />
                            </div>

                        </div>




                        <div className="form-floating input-group-phone ">


                            <input type="text" className="form-control form-control-height" id="autoSizingInputGroup1"
                                placeholder="Celular" />
                            <label htmlFor="autoSizingInputGroup1">Celular</label>

                            {/* <!--
                                <small className="form-text text-muted small-className">Ingrese 10 dígitos sin el 0 y sin el
                                    15</small> --> */}
                        </div>

                    </div>


                    <div className="address-2-container">

                        <div className="container mt-5-country mt-5">

                            <div className="mb-3 mb3-className-country select-container">
                                {/* <select id="country" className="form-select">
                                    <option value="" disabled selected>País</option>
                                    <option value="+54" data-flag="ar">(+54)</option>
                                    <option value="+1" data-flag="us">(+1)</option>
                                    <option value="+44" data-flag="gb">(+44)</option>
                                </select> */}
                                <CountrySelect />
                            </div>

                        </div>



                        <div className="form-floating input-group-phone ">


                            <input type="text" className="form-control form-control-height" id="autoSizingInputGroup2"
                                placeholder="Celular alternativo" />

                            <label htmlFor="autoSizingInputGroup2">Celular alternativo</label>


                            {/* <!-- <small className="form-text text-muted small-className">Ingrese 10 dígitos sin el 0 y sin el
                                    15</small> --> */}
                        </div>
                    </div>




                </div>



                <div className="container mt-5 container-mt-5">

                    <span className="address-title">Profesiones</span>

                    <div className="text-start">
                        <div className="mb-3 mb3-className-profession select-container ">
                            <div className="div-profesion">Profesión</div>
                            {/* <select id="Profesion" className="form-select">
                                <option value=""></option>
                                <option value="1">Ingeniero civil</option>
                                <option value="2">Diseñador gráfico</option>
                                <option value="3">Economista financiero</option>
                                <option value="4">Traductor/Intérprete de conferencias</option>
                                <option value="5">Abogado de derechos humanos</option>
                            </select> */}
                            <GenericSelect values={data?.[2]?.data || []} prop={'name'}/>
                        </div>

                        <small className="form-text text-muted">Debes ser profesional de la salud y/o movimiento</small>
                    </div>


                    <div className="mb-3 mb3-className-profession select-container ">

                        <div className="div-OProfesion">Otra Profesión</div>
                        {/* <select id="OtraProfesion" className="form-select">
                            <option value=""></option>
                            <option value="1">Ingeniero civil</option>
                            <option value="2">Diseñador gráfico</option>
                            <option value="3">Economista financiero</option>
                            <option value="4">Traductor/Intérprete de conferencias</option>
                            <option value="5">Abogado de derechos humanos</option>
                        </select> */}
                         <GenericSelect values={data?.[2]?.data || []} prop={'name'}/>

                    </div>


                </div>







                <div className="container-mt-5 mt-5-place ">

                    <span className="address-title">Fase Presencial</span>

                    <div className="text-start">
                        <div className="mb-3 mb3-className-where select-container ">



                            {/* <div className="div-place">Donde te gustaría realizar la Fase presencial de la Formación
                                TPA®?*</span>
                            <select id="documentType" className="form-select " name="location" multiple="multiple">
                                <option value="1">P. Sherman, 42 Wallaby Way, Sydney</option>
                                <option value="2">Pizza Planet, 231 County Road, Richmond, VA</option>
                                <option value="3">Stark Tower, 200 Park Avenue, New York, NY</option>
                                <option value="4">Av. Siempre viva</option>
                            </select> */}

                            <div className="div-place">Donde te gustaría realizar la Fase presencial de la Formación
                                TPA®?*</div>

                            <GenericSelect multi={true} values={data?.[3]?.data || []} prop={'description'}/>
                        </div>

                        <a className="link-info" href="/">Información sobre la Fase Presencial</a>
                    </div>


                </div>


                <div className="submit-button">
                    <input type="submit" className="button-send" value="Enviar" />
                    <small className="form-text text-muted small-cancelar"><a href="/">Cancelar</a></small>

                </div>
{/* 
                <GenericComponent/> */}


            </form>
        </div>
    )
}

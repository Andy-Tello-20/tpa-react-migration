import React from 'react'
import './UserRegistrationForm.css'

export const UserRegistrationForm = () => {
    return (

        <div class="form-container-interest">
            <form id="miFormulario" class="form-interest" action="">

                <a class="back" href="/"><i class="bi bi-arrow-left bi-class-back
            "></i>Volver</a>


                <div class="logo-interest">
                    <img src="../../../img/logo-colores-originales-sin-bajada.png" alt="logo"/>
                </div>


                <h1 class="title-interest">Formulario de interés</h1>

                <p class="intro">Para que podamos contactarte a la brevedad y enviarte la información sobre la Formación
                    Profesional TPA® o cómo adquirir la Membresía Profesional TPA®, por favor completa el formulario con
                    tus datos personales.</p>

                <div class="first-question">
                    <div class="container mt-5 container-mt-5 mt-5-height container-mw">
                        <div class="mb-3 mb3-class form-floating select-container ">

                            <span class="span-fq">¿Realizó anteriormente La Formación
                                TPA®?</span>
                            <select id="realizoFormacion" class="form-select form-control-height">
                                <option value="" disabled selected>¿Realizó anteriormente La Formación
                                    TPA®?</option>
                                <option value="no">No</option>
                                <option value="si">Sí</option>
                            </select>


                        </div>
                    </div>


                    <div class="container mt-5 container-mt-5 cont-year mt-5-height">
                        <div class="mb-3 mb3-class-year select-container">

                            <span class="span-year">Año en que realizaste la Formación TPA</span>
                            <select id="yearSelect" class="form-select">
                                <option value=""></option>
                                <option value="1">2024</option>
                                <option value="2">2023</option>
                                <option value="3">2022</option>
                                <option value="4">2021</option>
                                <option value="5">2020</option>
                                <option value="6">2019</option>
                                <option value="7">2018</option>
                                <option value="8">2017</option>

                            </select>
                        </div>
                    </div>
                </div>





                {/* <!-- "class="form-control is-invalid"" establece error de input --> */}


                <div class="datos-container">

                    <span class="address-title-datos">Datos Personales</span>

                    <div class="form-floating ">

                        <input type="text" class="form-control form-control-height" id="floatingInputNombre"
                            placeholder="Nombre"/>
                            <label for="floatingInputNombre">Nombre/s</label>

                    </div>

                    <div class="form-floating">
                        <input type="text" class="form-control form-control-height" id="floatingLastName"
                            placeholder="Apellido"/>
                            <label for="floatingLastName">Apellido/s</label>
                    </div>

                    <div class="dni">
                        <div class="form-floating selected1 select-container">
                            <select class="form-select form-control-height">
                                <option value="" disabled selected>Tipo de Documento*</option>
                                <option value="1">DNI</option>
                                <option value="2">Pasaporte</option>
                                <option value="3">UE</option>
                            </select>
                        </div>
                        <div class="form-floating nro">
                            <input type="text" class="form-control form-control-height" id="floatingNro"
                                placeholder="Nro"/>
                                <label for="floatingNro">Nro de Documento</label>
                        </div>
                    </div>


                </div>



                <div class="address-1">
                    <span class="address-title">Contacto</span>



                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-envelope bi-class-Envelope"></i></span>

                        <div class="form-floating flex-grow-1">
                            <input type="text" class="form-control form-control-height" name="code1"
                                placeholder="Code 1"/>
                                <label for="code1">Email</label>
                        </div>

                    </div>


                    <div class="address-1-container">
                        <div class="container mt-5-country mt-5">

                            <div class="mb-3 mb3-class-country select-container ">
                                <select id="country2" class="form-select">
                                    <option value="" disabled selected>País</option>
                                    <option value="+54" data-flag="ar">(+54)</option>
                                    <option value="+1" data-flag="us">(+1)</option>
                                    <option value="+44" data-flag="gb">(+44)</option>
                                </select>
                            </div>

                        </div>




                        <div class="form-floating input-group-phone ">


                            <input type="text" class="form-control form-control-height" id="autoSizingInputGroup1"
                                placeholder="Celular"/>
                                <label for="autoSizingInputGroup1">Celular</label>

                                {/* <!--
                                <small class="form-text text-muted small-class">Ingrese 10 dígitos sin el 0 y sin el
                                    15</small> --> */}
                        </div>

                    </div>


                    <div class="address-2-container">

                        <div class="container mt-5-country mt-5">

                            <div class="mb-3 mb3-class-country select-container">
                                <select id="country" class="form-select">
                                    <option value="" disabled selected>País</option>
                                    <option value="+54" data-flag="ar">(+54)</option>
                                    <option value="+1" data-flag="us">(+1)</option>
                                    <option value="+44" data-flag="gb">(+44)</option>
                                </select>
                            </div>

                        </div>



                        <div class="form-floating input-group-phone ">


                            <input type="text" class="form-control form-control-height" id="autoSizingInputGroup2"
                                placeholder="Celular alternativo"/>

                                <label for="autoSizingInputGroup2">Celular alternativo</label>


                                {/* <!-- <small class="form-text text-muted small-class">Ingrese 10 dígitos sin el 0 y sin el
                                    15</small> --> */}
                        </div>
                    </div>




                </div>



                <div class="container mt-5 container-mt-5">

                    <span class="address-title">Profesiones</span>

                    <div class="text-start">
                        <div class="mb-3 mb3-class-profession select-container ">
                            <span class="span-profesion">Profesión</span>
                            <select id="Profesion" class="form-select">
                                <option value=""></option>
                                <option value="1">Ingeniero civil</option>
                                <option value="2">Diseñador gráfico</option>
                                <option value="3">Economista financiero</option>
                                <option value="4">Traductor/Intérprete de conferencias</option>
                                <option value="5">Abogado de derechos humanos</option>
                            </select>
                        </div>

                        <small class="form-text text-muted">Debes ser profesional de la salud y/o movimiento</small>
                    </div>


                    <div class="mb-3 mb3-class-profession select-container ">

                        <span class="span-OProfesion">Otra Profesión</span>
                        <select id="OtraProfesion" class="form-select">
                            <option value=""></option>
                            <option value="1">Ingeniero civil</option>
                            <option value="2">Diseñador gráfico</option>
                            <option value="3">Economista financiero</option>
                            <option value="4">Traductor/Intérprete de conferencias</option>
                            <option value="5">Abogado de derechos humanos</option>
                        </select>

                    </div>


                </div>







                <div class="container-mt-5 mt-5-place ">

                    <span class="address-title">Fase Presencial</span>

                    <div class="text-start">
                        <div class="mb-3 mb3-class-where select-container ">



                            <span class="span-place">Donde te gustaría realizar la Fase presencial de la Formación
                                TPA®?*</span>
                            <select id="documentType" class="form-select " name="location" multiple="multiple">
                                <option value="1">P. Sherman, 42 Wallaby Way, Sydney</option>
                                <option value="2">Pizza Planet, 231 County Road, Richmond, VA</option>
                                <option value="3">Stark Tower, 200 Park Avenue, New York, NY</option>
                                <option value="4">Av. Siempre viva</option>
                            </select>
                        </div>

                        <a class="link-info" href="/">Información sobre la Fase Presencial</a>
                    </div>


                </div>


                <div class="submit-button">
                    <input type="submit" class="button-send" value="Enviar"/>
                        <small class="form-text text-muted small-cancelar"><a href="/">Cancelar</a></small>

                </div>



            </form>
        </div>
    )
}

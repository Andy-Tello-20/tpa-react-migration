import React from 'react'
import './UserRegistrationForm.css'
import { CountrySelect } from '../../../../../common/CountrySelect/CountrySelect'
import { GenericSelect } from '../../../../../common/GenericSelect/GenericSelect'
import { useGetData } from '../../../../../../hooks/useGetData'
import { FetchData, useSubmitData } from '../../registerControler'
import logoSB from '../../../../../../assets/img/logo-colores-originales-sin-bajada.png'
import { useState } from 'react'
// import { GenericComponent } from '../../../../../common/GenericComponent/GenericComponent'

export const UserRegistrationForm = () => {

    const { data } = useGetData(FetchData)

    const yesOrNot = [
        { name: 'Si', description: '' },
        { name: 'No', description: '' }
    ]


    function generateYearsArray() {
        const currentYear = new Date().getFullYear()
        const startYear = 2017
        const yearsArray = []

        for (let year = startYear; year <= currentYear; year++) {
            yearsArray.push({ name: year, description: '' })
        }

        return yearsArray;
    }


    const years = generateYearsArray();


    const { register, handleSubmit, onSubmit, setValue } = useSubmitData()
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSelectChange = (selectedOption) => {
        setSelectedValue(selectedOption)

    };

    // console.log('data from useGetData: ',data)

    return (

        <div className="form-container-interest">
            <form id="miFormulario" className="form-interest" onSubmit={handleSubmit(onSubmit)}>

                <a className="back" href="/"><i className="bi bi-arrow-left bi-className-back
            "></i>Volver</a>


                <div className="logo-interest">
                    <img src={logoSB} alt="logo" />
                </div>


                <h1 className="title-interest">Formulario de interés</h1>

                <p className="intro">Para que podamos contactarte a la brevedad y enviarte la información sobre la Formación
                    Profesional TPA® o cómo adquirir la Membresía Profesional TPA®, por favor completa el formulario con
                    tus datos personales.</p>

                <div className="first-question">
                    <div className=" mt-5 container-mt-5 mt-5-height container-mw">
                        <div className="mb-3 mb3-className form-floating select-container ">

                            <div className="div-fq">¿Realizó anteriormente La Formación
                                TPA®?</div>


                            <GenericSelect
                                values={yesOrNot}
                                name={'formation'}
                                onSelectChange={handleSelectChange}
                                {...register('formation?', { required: false })}
                                setValue={setValue} />

                        </div>
                    </div>



                    {selectedValue && selectedValue.value === "Si" ?
                        <div className="mt-5 container-mt-5 cont-year mt-5-height">
                            <div className=" mb3-className-year select-container">

                                <div className="div-year">Año en que realizaste la Formación TPA®</div>

                                <GenericSelect
                                    name="year"
                                    values={years}
                                    prop={'year'}
                                    // onSelectChange={(selectedOption) => setValue('year', selectedOption.year)}
                                    {...register('year', { required: false })}
                                    setValue={setValue}

                                />

                            </div>
                        </div>
                        :
                        null
                    }

                </div>





                {/* <!-- "className="form-control is-invalid"" establece error de input --> */}


                <div className="datos-container">

                    <span className="address-title-datos">Datos Personales</span>

                    <div className="form-floating ">

                        <input type="text" className="form-control form-control-height" id="floatingInputNombre"
                            placeholder="Nombre"
                            name={'name'}
                            {...register('name', { required: false })}
                        />
                        <label htmlFor="floatingInputNombre">Nombre/s</label>

                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control form-control-height" id="floatingLastName"
                            name={'lastName'}
                            {...register('lastName', { required: false })} />

                        <label htmlFor="floatingLastName">Apellido/s</label>
                    </div>

                    <div className="dni">
                        <div className="form-floating selected1 select-container">

                            <GenericSelect
                                name={'DNI'}
                                placeholder={'Tipo de Documento'}
                                values={data?.[1]?.data || []}
                                prop={'description'}
                                setValue={setValue}
                                {...register('DNI', { required: false })} />

                        </div>
                        <div className="form-floating nro">
                            <input type="text" className="form-control form-control-height" id="floatingNro"
                                placeholder="Nro"
                                name={'dniNumber'}
                                {...register('dniNumber', { required: false })} />
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
                                placeholder="Code 1"
                                {...register('code1', { required: false })} />

                            <label htmlFor="code1">Email</label>
                        </div>

                    </div>


                    <div className="address-1-container">
                        <div className=" mt-5-country mt-5">

                            <div className="mb-3 mb3-className-country select-container ">

                                <CountrySelect placeholder={'País'}
                                    values={data?.[0]?.data}
                                    setValue={setValue}
                                    name={'pais1'}
                                    {...register('pais1', { required: false })} />
                            </div>

                        </div>




                        <div className="form-floating input-group-phone ">


                            <input type="text" className="form-control form-control-height" id="autoSizingInputGroup1"
                                placeholder="Celular" />
                            <label htmlFor="autoSizingInputGroup1">Celular</label>

                        </div>

                    </div>


                    <div className="address-2-container">

                        <div className="container mt-5-country mt-5">

                            <div className="mb-3 mb3-className-country select-container">

                                <CountrySelect placeholder={'País'}
                                    values={data?.[0]?.data}
                                    setValue={setValue}
                                    name={'pais2'}
                                    {...register('pais2', { required: false })} />
                            </div>

                        </div>



                        <div className="form-floating input-group-phone ">


                            <input type="text" className="form-control form-control-height" id="autoSizingInputGroup2"
                                placeholder="Celular alternativo"

                            />

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

                            <GenericSelect placeholder={'Seleccione una profesión'} values={data?.[2]?.data || []} name={'profesion'} setValue={setValue} />
                        </div>

                        <small className="form-text text-muted">Debes ser profesional de la salud y/o del movimiento, como pilates, yoga, educación física, para realizar la formación TPA®</small>
                    </div>


                    <div className="mb-3 mb3-className-profession select-container ">

                        <div className="div-OProfesion">Otra Profesión</div>

                        <GenericSelect placeholder={'Seleccione otra profesión'} values={data?.[2]?.data || []} name={'otraProfesion'} setValue={setValue} />

                    </div>


                </div>


                <div className="container-mt-5 mt-5-place ">

                    <span className="address-title">Fase Presencial</span>

                    <div className="text-start">
                        <div className="mb-3 mb3-className-where select-container ">

                            <div className="div-place">Donde te gustaría realizar la Fase presencial de la Formación
                                TPA®?*</div>

                            <GenericSelect placeholder={'Elija una o mas ubicaciones'}
                                multi={true}
                                values={data?.[3]?.data || []}
                                name={'where'}
                                closeMenu={false}
                                {...register('where', { required: false })}
                                setValue={setValue} />
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

import React from 'react'
import './loginForm.css'
import logoSB from '../../../../assets/img/logo-colores-originales-sin-bajada.png'
import { useSubmitControler } from '../../../../pages/login/loginController'

// import { Link } from 'react-router-dom'

export const UserLoginForm = () => {


    const { handleSubmit, register, onSubmit } = useSubmitControler()

    return (
        <div className="form-container">
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>

                <div className="logo-login">
                    <img src={logoSB} alt="logo" />
                </div>

                <h1 className="title">Bienvenido</h1>

                <div className="form-floating mb-3">
                    <input {...register('email', { required: 'email is required' })} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" autoFocus autoComplete='userName'/>
                        <label htmlFor="floatingInput">Usuario</label>
                </div>




                <div className="input-group mb-3">


                    <div className="form-floating flex-grow-1">

                        <input {...register('password', { required: 'password is required' })} type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" autoComplete="current-password"/>
                            <label htmlFor="floatingPassword">Contraseña</label>

                            <span className="span-eye toggle-password"><i className="bi bi-eye-slash bi-className-eye"></i></span>

                    </div>

                </div>





                <div id="errorMessage" className="error-message"></div>

                <input type="submit"  className="button" value="Acceder"/>



                    {/* <Link to="#" className="link">Necesitas ayuda?</Link> */}
            </form>
        </div>
    )
}



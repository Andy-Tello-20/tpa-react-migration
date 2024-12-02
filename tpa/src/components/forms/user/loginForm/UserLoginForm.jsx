import React from 'react'
import './loginForm.css'
import logoSB from '../../../../assets/img/logo-colores-originales-sin-bajada.png'
import { useSubmitControler } from '../../../../pages/login/loginController'
import { useState } from 'react'

// import { Link } from 'react-router-dom'

export const UserLoginForm = () => {


    const { handleSubmit, register, onSubmit , message} = useSubmitControler()
    const [showPassword, setShowPassword] = useState(true)

   const togleEye = () => {
        setShowPassword(!showPassword)
   };

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

                        <input {...register('password', { required: 'password is required' })} type={showPassword ? "password" : "text"} className="form-control" id="floatingPassword" placeholder="Contraseña" autoComplete="current-password"/>
                            <label htmlFor="floatingPassword">Contraseña</label>

                            <span className="span-eye toggle-password" ><i onClick={()=>togleEye()} className={showPassword ? "bi bi-eye-slash bi-class-eye" : "bi bi-eye bi-class-eye"}></i></span>

                    </div>

                </div>





                <div id="errorMessage" className="error-message">{message}</div>

                <input type="submit"  className="button" value="Acceder"/>


                <a href="/home" className="link">Necesitas ayuda?</a>
                    {/* <Link to="#" className="link">Necesitas ayuda?</Link> */}
            </form>
        </div>
    )
}


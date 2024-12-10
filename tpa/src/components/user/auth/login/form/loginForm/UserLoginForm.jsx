import React from 'react'
import './loginForm.css'
import logoSB from '../../../../../../assets/img/logo-colores-originales-sin-bajada.png'
import { useSubmitControler } from '../../loginController'
import { useState } from 'react'
import ReactBootstrapModal from '../../../../../feedback/modal/Modal'


// import { Link } from 'react-router-dom'

export const UserLoginForm = () => {


    const { handleSubmit, register, onSubmit, message } = useSubmitControler()
    const [showPassword, setShowPassword] = useState(true)


    const [showModalRecovery, setshowModalRecovery] = useState(false);
    const [showModalUnlockUser, setshowModalUnlockUser] = useState(false);





    //!👉 Función para cambiar el estado del modal
    const toggleModal = () => {
        setshowModalRecovery(!showModalRecovery);
    };


    const toggleUnlockUser = () => {
        setshowModalUnlockUser(!showModalUnlockUser);
    };


    const formulario = (<form>
        <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
        </div>
        <div>
            <label htmlFor="email">Correo:</label>
            <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Enviar</button>
    </form>);


    //!👉 Función mostrar la contraseña
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
                    <input {...register('username', { required: 'email is required' })} type="email" className="form-control" id="floatingInput" autoFocus autoComplete='userName' placeholder="Usuario" />
                    <label htmlFor="floatingInput">Usuario</label>
                </div>




                <div className="input-group">


                    <div className="form-floating flex-grow-1">

                        <input {...register('password', { required: 'password is required' })} type={showPassword ? "password" : "text"} className="form-control" id="floatingPassword" placeholder="Contraseña" autoComplete="current-password" />
                        <label htmlFor="floatingPassword">Contraseña</label>

                        <span className="span-eye toggle-password" ><i onClick={() => togleEye()} className={showPassword ? "bi bi-eye-slash bi-class-eye" : "bi bi-eye bi-class-eye"}></i></span>

                    </div>


                </div>
                <a href="/" className="link linkPassword text-end" onClick={(e) => { e.preventDefault(); toggleModal(); }}>
                    ¿Olvidaste tu contraseña?
                </a>




                <div id="errorMessage" className="error-message">{message}</div>

                <input type="submit" className="button" value="Acceder" />
                <p className='mt-2 yanm'>¿No sos miembro?
                    <a href="/" className='link ps-2' >Registrate</a>
                </p>

                <a href="/home" className="link linkUnlockUser" onClick={(e) => { e.preventDefault(); toggleUnlockUser(); }}>¿Bloqueaste tu usuario?</a>
                {/* <Link to="#" className="link">Necesitas ayuda?</Link> */}
            </form>

            <ReactBootstrapModal showModalRecovery={showModalRecovery} toggleModal={toggleModal} text={'Recuperar contraseña'} textButton={'Recuperar'} formFooter={formulario} />

            <ReactBootstrapModal showModalUnlockUser={showModalUnlockUser} toggleModal={toggleUnlockUser} text={'Desbloquear usuario'} textButton={'Desbloquear'} />

        </div>
    )
}


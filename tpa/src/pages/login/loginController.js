
import { useForm } from 'react-hook-form';
import { loginAuth } from './authServices';
import { useState } from 'react';

export const useSubmitControler = () => {

    const [message, setMessage] = useState('')
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data)

            const result = await loginAuth(data)

            console.log('resultado ', result)
            setMessage('Datos Enviados')

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { register, handleSubmit, onSubmit, message }
}
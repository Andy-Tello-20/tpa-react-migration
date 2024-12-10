import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ApiService } from './registerServices';




export const FetchData = async () => {

    try {
        const data = await ApiService.getData()
        return (data)

    } catch (error) {
        console.error('Service Error:', error)
        console.error('error response:', error.response)
        throw error
      }
}

export const SubmitData = () => {

    const [message, setMessage] = useState('')
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data)

            const result = await ApiService.postData(data)

            console.log('resultado ', result)
            setMessage('Datos Enviados')

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { register, handleSubmit, onSubmit, message }

}



import { useForm } from 'react-hook-form';
import { loginAuth } from './authServices';

export const useSubmitControler = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data)

            const result = await loginAuth(data)

            console.log('resultado ', result)

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { register, handleSubmit, onSubmit }
}
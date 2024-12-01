import axios from 'axios'

export const loginAuth = async (data) => {

  console.log('DATOS: ',data)
  try {
    const response = await axios.post(
      'https://fakestoreapi.com/users', 
      data, 
      {
        headers: { 'Content-Type': 'application/json' }, 
      }
    )

    return response.data
  } catch (error) {
    console.error('Service Error:', error)
    throw error
  }
}



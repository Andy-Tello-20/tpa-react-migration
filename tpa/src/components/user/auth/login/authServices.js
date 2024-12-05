import axios from 'axios'

export const loginAuth = async (data) => {

  const baseUrl = process.env.REACT_APP_BASE_URL
  console.log('Request URL:', `${baseUrl}Authentication/Login`);

  console.log('DATOS: ',data)
  try {
    const response = await axios.post(
      `${baseUrl}Authentication/Login`, 
      data, 
      {
        headers: { 'Content-Type': 'application/json', 'Authorization': '' }, 
      }
    )

    return response.data
  } catch (error) {
    console.error('Service Error:', error)
    throw error
  }
}



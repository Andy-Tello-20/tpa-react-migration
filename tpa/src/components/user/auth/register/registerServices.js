import axios from 'axios';

export class ApiService {

  static async getData() {
    const baseUrl = process.env.REACT_APP_BASE_URL
  
    try {
      const urls = [
        `${baseUrl}Common/CellphonePrefixes`,
        `${baseUrl}Common/DocumentTypes`,
        `${baseUrl}Common/Professions`,
        `${baseUrl}Common/FormationPlaces`,
      ];
  
  
      const responses = await Promise.all(urls.map((url) => axios.get(url)))

      console.log('Promises are: ', responses)
  
      return responses
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }
  



  static async postData(data) {

    const baseUrl = process.env.REACT_APP_BASE_URL
    console.log('Request URL:', `${baseUrl}Authentication/Login`)

    console.log('DATOS: ', data)
    try {
      const response = await axios.post(
        `${baseUrl}Authentication/Login`,
        data,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )

      return response.data
    } catch (error) {
      console.error('Service Error:', error)
      console.error('error response:', error.response)
      throw error
    }

  }
}


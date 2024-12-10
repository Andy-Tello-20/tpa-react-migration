import { useState, useEffect } from 'react'

export const useGetData = (fetchFunction) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await fetchFunction()

        setData(result)

      } catch (err) {
        setError(err.message || 'Error desconocido')
      } finally {
        setLoading(false)
      }
    };

    fetchData()
  }, [fetchFunction])

  return { data, error, loading }
}

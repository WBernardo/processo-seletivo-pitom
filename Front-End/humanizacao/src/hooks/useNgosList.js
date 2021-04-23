import { useState, useEffect } from 'react'
import axios from 'axios'

export const useNgosList = () => {
    const [ngos, setNgos] = useState([])

  useEffect(() => {
    axios.get("https://humanizacao.herokuapp.com/ngo/all")
    .then((response) => {
      setNgos(response.data.NGOS)
    }).catch((error) => console.log(error.message))
  }, [ngos])

  return ngos
}
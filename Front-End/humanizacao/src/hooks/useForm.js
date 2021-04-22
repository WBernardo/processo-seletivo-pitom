import { useState } from "react"

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)

  const onChangeInput = (event) => {
    const {value, name} = event.target
    setForm({...form, [name]: value})
  }

  return [form, onChangeInput]
}
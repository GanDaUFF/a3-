import { useState } from 'react'


export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    localStorage.setItem('userInfos', JSON.stringify(formData))
    window.location.href = '/map'
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Coloque seu email"
          name="email"
          value={formData.email}
          onChange={({ target }) => setFormData((prevState) => ({ ...prevState, [target['name']]: target.value }))}
          />
        <input
          type="password"
          placeholder="Coloque sua senha"
          name="password"
          value={formData.password}
          onChange={({ target }) => setFormData((prevState) => ({ ...prevState, [target['name']]: target.value }))}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

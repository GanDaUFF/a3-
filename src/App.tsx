import { useState } from "react";


function App() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const local = localStorage.getItem('userInfos')
    if (!local) {
      alert('Usuário não cadastrado!')
      return;
    }
    const localInfos = JSON.parse(local) as typeof formData

    
    if (localInfos.email === formData.email && localInfos.password === formData.password) {
      window.location.href = '/map'
      return;
    }

    alert('Credenciais incorretas!')
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
      <a href="/register">Ainda não cadastrado?</a>
    </>
  )
}

export default App

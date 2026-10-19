import { useEffect, useState } from 'react'
import { Container } from 'reactstrap'

function App() {
  const [message, setMessage] = useState('Consultando el API...')
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const checkHealth = async () => {
      try {
        // Espera la respuesta y convierte los datos a JSON.
        const response = await fetch('http://localhost:3005/api/health')

        if (!response.ok) {
          throw new Error('No fue posible consultar el API.')
        }

        const data = await response.json()
        setMessage(data.message)
      } catch {
        setHasError(true)
        setMessage('No fue posible conectar con el API.')
      }
    }

    checkHealth()
  }, [])

  return (
    <Container className="py-5">
      <h1>Taller IV</h1>

      <section className={`api-section ${hasError ? 'api-error' : ''}`}>
        <div>
          <h4>Estado del API</h4>
          <p role="status">{message}</p>
        </div>
      </section>
    </Container>
  )
}

export default App

import { useEffect, useState } from 'react'
import { Alert, Card, CardBody, Col, Container, Row } from 'reactstrap'

function App() {
  const [message, setMessage] = useState('Consultando el API...')
  const [hasError, setHasError] = useState(false)
  const [members, setMembers] = useState([])
  const [infoMessage, setInfoMessage] = useState('')
  const [infoError, setInfoError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

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

    const loadInfo = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/info')

        if (!response.ok) {
          throw new Error('No fue posible consultar los integrantes.')
        }

        const result = await response.json()
        setInfoMessage(result.message)
        setMembers(result.data)
      } catch {
        setInfoError('No fue posible cargar la información de los integrantes.')
      } finally {
        setIsLoading(false)
      }
    }

    loadInfo()
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

      <section className="mt-4">
        <h2>Integrantes</h2>

        {isLoading && <p role="status">Cargando integrantes...</p>}
        {infoError && <Alert color="danger">{infoError}</Alert>}

        {!isLoading && !infoError && (
          <>
            <Alert color="success">{infoMessage}</Alert>
            <Row className="g-3">
              {/* Una tarjeta por cada integrante recibido del backend. */}
              {members.map((member) => (
                <Col md="6" lg="4" key={member.id}>
                  <Card className="member-card h-100">
                    <CardBody>
                      <h3 className="h5">{member.name}</h3>
                      <p><strong>Edad:</strong> {member.age} años</p>
                      <p><strong>Carrera:</strong> {member.career}</p>
                      <p className="mb-0">
                        <strong>Materias aprobadas:</strong> {member.approvedSubjects}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </section>
    </Container>
  )
}

export default App

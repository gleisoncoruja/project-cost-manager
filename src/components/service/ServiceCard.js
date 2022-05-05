import styles from '../project/ProjectCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { Card,Container,Row,Col } from 'react-bootstrap'

function ServiceCard ({ id, name, cost, description, handleRemove}) {

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id,cost)
  }

  return (
    <div className={styles.project_card}>
      <Container fluid="md">
          <Row>
            <Col md='4'>
              <Card style={{ width: '18rem'}} border='0' bg='transparent'>
                <Card.Body>
                  <Card.Title><h4>{name}</h4></Card.Title>
                  <Card.Text>
                    <p>
                      <span>Custo total:</span> R$ {cost}
                    </p>
                    <p>{description}</p>
                  </Card.Text>
                  <div className={styles.project_card_actions}>
                    <button onClick={remove}>
                      <BsFillTrashFill />
                      Excluir
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>


      {/* <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R$ {cost}
      </p>
      <p>{description}</p>
      <div className={styles.project_card_actions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div> */}
    </div>
  )
}

export default ServiceCard

import { Link } from 'react-router-dom'
import { Card,Container,Row,Col } from 'react-bootstrap'
import styles from './ProjectCard.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard ({ id, name, budget, category, handleRemove }) {

    const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
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
                    <p className={styles.category_text}>
                      <span className={`${styles[category.toLowerCase()]}`} ></span> {category}
                    </p>
                  </Card.Text>
                  <div className={styles.project_card_actions}>
                    <Link to ={`/project/${id}`}>
                      <BsPencil /> Editar
                    </Link>
                    <button onClick={remove}>
                      <BsFillTrashFill /> Excluir
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default ProjectCard

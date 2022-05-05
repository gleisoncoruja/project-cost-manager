import {Link} from 'react-router-dom'
//import  Container  from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png'

import { Navbar,Nav,Container } from 'react-bootstrap'

function NavBar (){
    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logo} alt="Costs" />
          </Link>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav className={styles.item}>
            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/projects'>Projetos</Link></Nav.Link>
            <Nav.Link><Link to='/company'>Empresa</Link></Nav.Link>
            <Nav.Link><Link to='/contact'>Contato</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

        /* <nav className={styles.navbar}>
          <Container>
            <Link to='/'>
              <img src={logo} alt="Costs" />
            </Link>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to='/'>Home</Link>
              </li>
              <li className={styles.item}>
                <Link to='/projects'>Projetos</Link>
              </li>
              <li className={styles.item}>
                <Link to='/company'>Empresa</Link>
              </li>
              <li className={styles.item}>
                <Link to='/contact'>Contato</Link>
              </li>
            </ul>

          </Container>
        </nav> */
    )
}
export default NavBar

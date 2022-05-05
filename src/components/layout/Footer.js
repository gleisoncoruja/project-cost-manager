import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer (){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><a href="https://www.linkedin.com/in/gleison-souza-3b0939237/"><FaLinkedin /></a></li>
                <li><a href="https://github.com/gleisoncoruja"><FaGithub /></a></li>
                <li><a href="https://www.facebook.com/gleison.souza.9461"><FaFacebook /></a></li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> Gleison Souza &copy; 2022</p>
        </footer>
    )
}
export default Footer

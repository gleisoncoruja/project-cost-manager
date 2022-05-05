import styles from './SubmitButton.module.css'
import { Button } from 'react-bootstrap';

function SubmitButton ({ text }) {
    return (
        <div>
            <Button variant="primary" type='submit' className={styles.btn} >{ text }</Button>
            {/* <button className={styles.btn} >{ text }</button> */}
        </div>
    )
}

export default SubmitButton

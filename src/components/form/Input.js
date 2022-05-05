import styles from './Input.module.css'
import { Form } from 'react-bootstrap';

function Input ({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
          <Form.Label>{text}</Form.Label>
          <Form.Control
           type={type}
           name={name}
           id={name}
           placeholder={placeholder}
           onChange={handleOnChange}
           value={value}
           />
        </div>
    )
}

export default Input

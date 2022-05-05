import { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';

//import styles from './Message.module.css'

function Message({ type, msg }) {

    //const [visible, setVisible] = useState(false)
    const [show, setShow] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false)
      },3000)

      return () => clearTimeout(timer)
    },[show])

    if (show) {
      if (type === 'error') {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Ops! Alguma coisa ta errada</Alert.Heading>
            <p>
              {msg}
            </p>
          </Alert>
        )}
      if (type === 'success') {
        return (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Tudo certo!</Alert.Heading>
            <p>
              {msg}
            </p>
          </Alert>
        )}
    }

    }




    /* useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        },3000)

        return () => clearTimeout(timer)
    },[msg]) */

    /* return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`} >{msg}</div>
            )}
        </>
    ) */


export default Message

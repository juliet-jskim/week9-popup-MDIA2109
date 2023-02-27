import { useState } from "react"
import styles from './Ad.Module.css'

export default function Ad() {

    const [popup, setPopup] = useState(true); //if theres only 2 different values, e.g yes/no, you can use boolean values


    return (
        <>
        {
            popup ? 
            <div className={styles.container}>
                    <div className={styles.popup__area}>
                        <div onClick={() => setPopup(false)}>
                            Close
                        </div>
                    </div>
            </div>
            : <></> //if false, it will show up empty 
        }
        </>
    )
}
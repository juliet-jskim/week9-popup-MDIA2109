import { useState } from "react"
import styles from './Ad.Module.css'

export default function Ad() {

    const [popup, setPopup] = useState(true); //if theres only 2 different values, e.g yes/no, you can use boolean values


    return (
        <>
        {
            popup ?
            <div className={styles.}>
                    <div>
                        <div>

                        </div>
                    </div>
            </div>
        }
        </>
    )
}
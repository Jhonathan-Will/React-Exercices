import { useState } from "react"

import "./exercice.css"
const Exercice = () => {
    const style1 = "containerAmarelo"
    const style2 = "containerAzul"

    const [container1, setContainer1] = useState(style1)
    const [container2, setContainer2] = useState(style1)
    const [container3, setContainer3] = useState(style1)
    const [container4, setContainer4] = useState(style1)

    const handleChange = (value, setValue) => {
        setValue(value === style1 ? style2 : style1);
    }

    return(
        <>
            <div>
            <button className={container1} onClick={() => handleChange(container1, setContainer1)}>
            </button>

            <button className={container2} onClick={() => handleChange(container2, setContainer2)}>
            </button>

            <button className={container3} onClick={() => handleChange(container3, setContainer3)}>
            </button>

            <button className={container4} onClick={() => handleChange(container4, setContainer4)}>
            </button>
            </div>
        </>
    )
}

export default Exercice
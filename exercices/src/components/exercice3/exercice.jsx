import { useState } from "react"

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
                <div className={container1} id="div1">a</div>
            </button>

            <button onClick={() => handleChange(container2, setContainer2)}>
                <div className={container2} id="div2">b</div>
            </button>

            <button onClick={() => handleChange(container3, setContainer3)}>
                <div className={container3} id="div3">c</div>
            </button>

            <button onClick={() => handleChange(container4, setContainer4)}>
                <div className={container4} id="div4">d</div>
            </button>
            </div>
        </>
    )
}

export default Exercice
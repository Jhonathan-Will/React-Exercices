import { useState } from "react";
import { useLongPress } from "@uidotdev/usehooks";

const Exercice = () => {
    const [count, setCount] = useState(0);

    const handlePlusPress = useLongPress(
        () => {
            let newCount = count + 3
            setCount(newCount)
        },
        {
          threshold: 500,
        }
      );

    const handleMinusPress = useLongPress(
        () => {
            let newCount = count - 3
            setCount(newCount)
        },
        {
          threshold: 500,
        }
    );

    const handleCount = (value) => {
        if(value === 0) {
            let newCount = count + 1
            setCount(newCount)
        }else if(value === 1){
            let newCount = count + 2
            setCount(newCount)
        }else if(value === 2){
            let newCount = count - 1
            setCount(newCount)
        }else{
            let newCount = count - 2
            setCount(newCount)
        }
    }

    return(
        <>
            <div>
                <h2 id="text">{count}</h2>

                <button onClick={() => handleCount(0)}>+1</button>
                <button onClick={() => handleCount(1)}>+2</button>
                <button {... handlePlusPress}>+3</button>

                <button onClick={() => handleCount(2)}>-1</button>
                <button onClick={() => handleCount(3)}>-2</button>
                <button {... handleMinusPress}>-3</button>
            </div>
        </>
    )
}

export default Exercice;
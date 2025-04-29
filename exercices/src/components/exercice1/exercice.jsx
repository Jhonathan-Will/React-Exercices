import { useState } from "react";

import "./exercice.css";

const Exercice = () => {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [mensagem, setMensagem] = useState("");

    const handleMedia = () => {
        const nota1Float = parseFloat(nota1);
        const nota2Float = parseFloat(nota2);
        const mediaCalculada = (nota1Float + nota2Float) / 2;

        if (mediaCalculada < 6) {
            setMensagem(`Sua média é ${mediaCalculada}, você está reprovado`);
        } else {
            setMensagem(`Sua média é ${mediaCalculada}, você está aprovado`);
        }
    };

    return (
        <>
            <div className="container">
                <h1>Calcular Média</h1>

                <input
                    type="number"
                    placeholder="Nota 1"
                    onChange={(e) => setNota1(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Nota 2"
                    onChange={(e) => setNota2(e.target.value)}
                />
                
                <button onClick={handleMedia}>Calcular</button>

                <input
                    type="text"
                    placeholder="Média"
                    value={mensagem}
                    readOnly
                />
            </div>
        </>
    );
};

export default Exercice;
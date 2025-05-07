import { useContext } from "react";
import { AppContext } from "./Context/Context";

import "./exercice.css";

const Exercice = () => {
    const { theme, toggleTheme } = useContext(AppContext);

    return(
            <>
                <div className={`${theme}`}>

                    <button onClick={toggleTheme}>Change Theme</button>

                    <p>Amiga linda, hoje é o seu dia, um dia mais que especial e feliz na vida de todo mundo que tem o prazer de conviver com você. Eu nem precisaria lhe desejar um feliz aniversário, porque para pessoas como você o dia em que se completa anos não poderia ser diferente, é sempre um dia de festa!
                    Sua amizade é muito especial para mim. Cada segredo confessado, cada abraço apertado e cada conselho ofertado foram essenciais para a construção da nossa amizade. Todos os momentos que vivi na sua companhia foram extremamente válidos, você é uma pessoa fantástica, que espero que esteja sempre ao meu lado! Te amo muito. ❤️</p>
                    <div>
                        <p>Ele é moreno, tatuado, trabalha, tem amigo tralha que se cuida, ele diz que ama pra umas 5, sai todo dia. AIIII paixonei miga, o que vc acha ?</p>
                    </div>
                </div>
            </>
    )
}

export default Exercice;
import { useState } from "react";


const Counter = (props) => {
    const [contador, setContador] = useState(0);

    const Sumar = () =>{
        setContador( contador + 1)
    };

    const Restar = () => {
        setContador( contador - 1)
    }

return(
    <div className="herdaer__contador">
        <button onClick={() => Sumar()}>Sumar</button>
        <span> {contador} </span>
        <button onClick={() => Restar()}> Restar</button>
    </div>
);


};

export default Counter;
import './TermekFelulet.css';
import Termek from './galeria_komponens/Termek.js';
import { konyvLISTA } from './adat.js';
import { useState } from 'react';
import Kosar from './Kosar.js';

function TermekFelulet() {

    const[kosar, setKosar] = useState([])

    function kosarbaTesz(adat){
        setKosar(kosar =>[...kosar, adat])
    }


    return (
        <div className="TermekFelulet">
            <div className="container">
                <div className="kosar">
                    <h2>Kosár</h2>
                    <table className="kosartabla">
                        <thead>
                            <tr>
                                <th>Cím</th>
                                <th>Szerző</th>
                                <th>Ár</th>
                            </tr>
                        </thead>
                        <tbody className="kosartartalom">
                            {kosar.map((elem, index) =>{
                                return(
                                    <Kosar
                                        kosar = {elem} key = {index}
                                     />
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>

                <div className="termekek">

                        {konyvLISTA.map((elem, index) => {
                            return (<Termek adat={elem} key={index} kosarbaTesz = {kosarbaTesz} />);
                        })}
                    </div>
                </div>
            </div>

    );
}

export default TermekFelulet;
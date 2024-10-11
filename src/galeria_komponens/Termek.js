export default function Termek(props){
    return[
        <div className="termek">
            <h1>{props.adat.cim}</h1>
            <h3>{props.adat.szerzo}</h3>
            <img src = {props.adat.src} alt = {props.adat.alt} />
            <p>{props.adat.ar}</p>
        </div>
    ]
}
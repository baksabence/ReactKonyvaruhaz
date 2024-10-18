import 'bootstrap/dist/css/bootstrap.min.css';


export default function Termek(props){




    return(

        <div className="termek"> 
        <div className="card"> 
            <img className="kep card-img-top" src={props.adat.src} alt={props.adat.alt} />
            <div className="card-body">
                <h4 className="card-title">{props.adat.cim}</h4>
                <h4 className="card-text">{props.adat.szerzo}</h4>
                <p className="card-text">{props.adat.ar}</p>
                <button className="gomb btn btn-primary mt-4" onClick={() => props.kosarbaTesz(props.adat)}>Kosárba</button>
            </div>
        </div>
    </div>

    )
}
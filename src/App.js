
import './App.css';
import { konyvLISTA } from './adat.js';
import Termek from './galeria_komponens/Termek.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Könyváruház</h1>
      </header>

      <main className="App-main row">
        
          <div className="fokep">
          <h2>Minden oldal új kezdet, de merre lapozol?</h2>
          <img src="./kepek/konyvkep.jpg" alt="every page is a new beginning." />
          </div>

          <div className="kiemelt">
            <h1 className="kimltballada">Kiemelt ballada</h1>
            <Termek adat = {{cim : "Ballada a senki fiáról", szerzo: "François Villon", src: "./kepek/villon.jpg", alt: "Villon" , ar: "4 242 Ft"} } key={0}/>
          </div>

          <div className="termekek">
            {konyvLISTA.map((elem, index) => {
              return(<Termek adat = {elem} key = {index} />)
            })}
         </div>

          
        </main>
        <footer>Baksa Bence</footer>
    </div>
  );
}

export default App;

import "./App.css";
import Competenties from "./components/competenties/competenties";
import Contactgegevens from "./components/contactgegevens/contactgegevens";
import Cursussen from "./components/cursussen/cursussen";
import Header from "./components/header/header";
import LeidinggevendProfiel from "./components/leidinggevendProfiel/leidinggevendProfiel";
import Opleiding from "./components/opleidingen/opleidingen";
import ProfessioneleVaardigheden from "./components/professioneleVaardigheden/professioneleVaardigheden";
import Referenties from "./components/referenties/referenties";
import Talen from "./components/talen/talen";
import Werkervaringen from "./components/werkervaringen/werkervaringen";

function App() {
	return (
		<main className='cv-container'>
			<div className='container main-container'>
				<Header />
				<div className='column-1'>
					<LeidinggevendProfiel />
					<ProfessioneleVaardigheden />
					<Contactgegevens />
					<Competenties />
					<Talen />
				</div>
				<div className='column-2'>
					<Werkervaringen />
					<Opleiding />
					<Cursussen />
					<Referenties />
				</div>
			</div>
		</main>
	);
}

export default App;

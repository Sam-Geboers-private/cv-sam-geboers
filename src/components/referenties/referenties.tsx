import Referentie from "./referentie/referentie";
import "./referenties.css";

const Referenties = () => {
	return (
		<div className='container referenties-container'>
			<h3>Referenties</h3>
			<div className='lijst lijst-referenties'>
				<Referentie
					bedrijf='Taxi Hendriks NV'
					persoon='Steve Hendriks'
					email='steve.hendriks@hendriks.be'
					GSM='0478 27 20 71'
				/>
				<Referentie
					bedrijf='Paulissen IT'
					persoon='Ruud Paulissen'
					GSM='+32 479 32 78 55'
				/>
			</div>
		</div>
	);
};

export default Referenties;

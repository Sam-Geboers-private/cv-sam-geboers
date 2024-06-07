import Opleiding from './opleiding/opleiding';
import './opleidingen.css';

const Opleidingen = () => {
	return (
		<div className='container opleidingen-container'>
			<h3>Opleidingen</h3>
			<div className='lijst lijst-opleidingen'>
				<Opleiding
					naam='Graduaat Programmeren'
					school='UCLL'
					opmerking={
						<ul>
							<li>Met onderscheiding afgestudeerd.</li>
						</ul>
					}
				/>
				<Opleiding
					naam='Prof. Bachelor Toegepaste Informatica'
					school='UCLL'
					opmerking={
						<ul>
							<li>
								Mijn focus ligt momenteel meer op programmeren, waardoor ik heb besloten de andere
								onderwerpen in deze opleiding voorlopig even te laten rusten.
							</li>
						</ul>
					}
				/>
			</div>
		</div>
	);
};

export default Opleidingen;

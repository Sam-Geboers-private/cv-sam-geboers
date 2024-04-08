import Opleiding from "./opleiding/opleiding";
import "./opleidingen.css";

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
								Niet afgemaakt, ik wou mij meer focussen op het programmeren
								i.p.v. de andere onderwerpen die in deze opleiding worden
								behandeld.
							</li>
						</ul>
					}
				/>
			</div>
		</div>
	);
};

export default Opleidingen;

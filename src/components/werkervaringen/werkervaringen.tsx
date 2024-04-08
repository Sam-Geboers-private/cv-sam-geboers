import Werkervaring from "./werkervaring/werkervaring";
import "./werkervaringen.css";

const Werkervaringen = () => {
	return (
		<div className='container werkervaringen-container'>
			<h3>Werkervaringen</h3>
			<div className='lijst lijst-werkervaringen'>
				<Werkervaring
					werkgever='Hendriks NV'
					functie='Developer'
					periode='2024'
				/>
				<Werkervaring
					werkgever='Ford Lommel Proving Ground'
					functie='Stage Angular Developer'
					periode='2023'
					commentaar={
						<ul>
							<li>Nauw samengewerkt met de back-end developer.</li>
							<li>
								Componenten gemaakt om de verlofdagen in het systeem te zetten
								en om deze te weergeven op een kalender.
							</li>
						</ul>
					}
				/>
			</div>
		</div>
	);
};

export default Werkervaringen;

import "./referentie.css";

interface IReferentie {
	bedrijf: string;
	persoon: string;
	email?: string;
	GSM?: string;
	linkedIn?: string;
}

const Referentie = (props: IReferentie) => {
	return (
		<div className='item-container referentie-container'>
			<h4>{props.bedrijf}</h4>
			<div className='col pl'>
				<span className='naam'>{props.persoon}</span>
				{props.email ? <span>E-mail: {props.email}</span> : null}
				{props.GSM ? <span>GSM: {props.GSM}</span> : null}
				{props.linkedIn ? <span>LinkedIn: {props.linkedIn}</span> : null}
			</div>
		</div>
	);
};

export default Referentie;

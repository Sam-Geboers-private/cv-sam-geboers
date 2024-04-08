import { ReactNode } from "react";
import "./werkervaring.css";

interface IWerkervaring {
	werkgever: string;
	functie: string;
	periode: string;
	commentaar?: ReactNode;
}

const Werkervaring = (props: IWerkervaring) => {
	return (
		<div className='item-container werkervaring-container'>
			<h4>{props.functie}</h4>
			<div>
				<span className='naam'>
					{props.werkgever} - ( {props.periode} )
				</span>
				{props.commentaar}
			</div>
		</div>
	);
};

export default Werkervaring;

import { ReactNode } from "react";
import "./opleiding.css";

interface IOpleiding {
	naam: string;
	school: string;
	opmerking?: ReactNode;
}

const Opleiding = (props: IOpleiding) => {
	return (
		<div className='item-container opleiding-container'>
			<h4>{props.naam}</h4>
			<div className='school-opmerking'>
				<span className='school'>{props.school}</span>
				{props?.opmerking}
			</div>
		</div>
	);
};

export default Opleiding;

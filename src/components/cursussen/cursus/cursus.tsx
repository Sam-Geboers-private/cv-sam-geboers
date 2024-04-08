import { ReactNode } from "react";
import "./cursus.css";

interface ICursus {
	naam: string;
	school: string;
	opmerking?: ReactNode;
}

const Cursus = (props: ICursus) => {
	return (
		<div className='item-container cursus-container'>
			<h4>{props.naam}</h4>
			<div className='school-opmerking'>
				<span className='school'>{props.school}</span>
				{props?.opmerking}
			</div>
		</div>
	);
};

export default Cursus;

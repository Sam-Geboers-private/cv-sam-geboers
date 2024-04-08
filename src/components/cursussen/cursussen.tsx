import Cursus from "./cursus/cursus";
import "./cursussen.css";

const Cursussen = () => {
	return (
		<div className='container cursussen-container'>
			<h3>Cursussen</h3>
			<div className='lijst lijst-cursussen'>
				<Cursus
					naam='Angular Core Deep Dive - Beginner to Advanced (Angular 16)'
					school='Udemy'
				/>
				<Cursus
					naam='Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)'
					school='Udemy'
				/>
			</div>
		</div>
	);
};

export default Cursussen;

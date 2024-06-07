import './header.css';
import profielFoto from '../../assets/profiel-foto.jpg';

const Header = () => {
	return (
		<div className='container header-container'>
			<img
				className='profilePic'
				src={profielFoto}
				alt='Profiel foto'
			/>
			<div className='info'>
				<h1>Sam Geboers</h1>
				<h2>Programmer</h2>
			</div>
		</div>
	);
};

export default Header;

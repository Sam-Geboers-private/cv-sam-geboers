import './contactgegevens.css';

const Contactgegevens = () => {
	return (
		<div className='container contactgegevens-container'>
			<h3 className='h3-dark'>Contactgegevens</h3>
			<ul>
				<li>GSM: +32 495 49 44 16</li>
				<li>E-mail: samgeboers2000@gmail.com</li>
				<li>Woonplaats: Lommel, België</li>
				<li>
					Rijbewijs:{' '}
					<input
						type='checkbox'
						checked
						disabled
					/>
				</li>
				<li>
					LinkedIn:{' '}
					<a
						href='https://www.linkedin.com/in/sam-geboers-a2a1ab289'
						target='_blank'
						rel='noreferrer'
						className='linkedIn weblink'>
						www.linkedin.com/in/sam-geboers-a2a1ab289
					</a>
				</li>
				<li>
					Github:{' '}
					<a
						href='https://github.com/Sam-Geboers-private'
						target='_blank'
						rel='noreferrer'
						className='github weblink'>
						https://github.com/Sam-Geboers-private
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Contactgegevens;

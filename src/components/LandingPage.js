import React from 'react';
import { Link } from 'react-router-dom';

import InlineVideo from './InlineVideo';

var selectedImage = null;

const LandingPage = () => {

	if(!selectedImage) selectedImage = selectRandom();

	return(
		<div className='landingPage'>
			<InlineVideo className='bgVid' fallbackImage={selectedImage}>
				<source src='/showreel.webm' type='video/webm' />
				<source src='/showreel.mp4' type='video/mp4' />			
			</InlineVideo>
			<h1><Link to='/'>Giusy Pirrotta</Link></h1>
		</div>
	)
}

function selectRandom() {
	let images = [
		'/vidFallback_1.jpg',
		'/vidFallback_2.jpg',
		'/vidFallback_3.jpg',
		'/vidFallback_4.jpg',
		'/vidFallback_5.jpg',
		'/vidFallback_6.jpg',
		'/vidFallback_7.jpg',
		'/vidFallback_8.jpg',
		'/vidFallback_9.jpg',
		'/vidFallback_10.jpg',
		'/vidFallback_11.jpg',
		'/vidFallback_12.jpg',
		'/vidFallback_13.jpg',
		'/vidFallback_14.jpg',
		'/vidFallback_15.jpg'
	]

	let i = Math.floor(Math.random() * images.length);

	return images[i];

}

export default LandingPage;
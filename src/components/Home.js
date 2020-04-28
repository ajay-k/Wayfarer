import React from 'react';
// import Carousel from './Carousel'
// import Carousel from 'react-bootstrap/Carousel'

const Home = () => {
    return (
    	<>
    	<div className="home bg ">
		    <img className = "mg-3" src="./images/san-francisco.jpg" alt="San Francisco"/>
		</div>

			<section class = "mt-3 mb-10">
				<h2 class = "mb-3">Wayfarer is...</h2>

			<div class="grid-wrapper articles">

				<article class="col-third">
					<div>
						<h3 class= "text-center">Cities</h3>
						<p>Explore our different city listings to check out our community's posts about their special travels.</p>
					</div>
				</article>

				<article class="col-third">
					<div>
						<h3 class= "text-center">Tips and Tricks</h3>
						<p>Become a part of the Wayfarer community and post your tips and tricks about the cities you've visted!</p>
					</div>
				</article>

				<article class="col-third">
					<h3 class= "text-center">Your Profile</h3>
					<p>Register to create a profile and view all of your personal experiences and tips and tricks you've added to your favorite cities!</p>
				</article>
			</div>
			</section>
		</>
    );
}

export default Home;
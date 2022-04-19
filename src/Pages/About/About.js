import React from 'react';
import aboutImg from '../../images/services/chemistry.jpg'
import './About.css'

const About = () => {

    return (
        <section className="about-sec">
		<div className="container">
			<div className="about-us-hlder">
				<div className="sec-hding-hldr">
					<span className="about-shp">
						{/* <img src={aboutImg} alt="shap2"/> */}
					</span>
				 <h2 className="hding-title ps-5">About <span>Us</span></h2>
				</div>
				<div className="row">
										<div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
						<div className="about-img-hlder">
							<img className='' src={aboutImg} alt="about"/>
						</div>
					</div>

					<div className="col-xl75 col-lg-7 col-md-12 col-sm-12 col-12">
						<div className="about-txt-hlder clear">
	            			<p>We are one of the pioneers in online tutoring and have been in the online tutoring space for over a decade. Our foundation is built on creativity, rigor, innovation, and high-quality instruction. We are confident that we are here to stay for a very long time. We are dedicated to offering result-oriented and outcome-based instructions and are now reorienting ourselves to meet the challenges of a modern twenty-first-century paradigm of educational excellence. With advancing, technology comes the pressure to change and to transform learning experiences without compromising on the heart and the soul of the children entrusted to our care. We are also deeply aware of the growing competition to provide better services. Therefore we are committed to a programmed transition that will see us as a global provider of personalized online teaching with the best minds we can find to join our expanding team of experts.</p>
							<a href="https://etutorhome.com/about/" className="common-btn abtrdmore">...more</a>
						</div>
					</div>
									</div>
			</div>
			
		</div>
	</section>
    );
};

export default About;
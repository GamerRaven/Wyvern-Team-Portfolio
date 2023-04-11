import React from "react";
import "./TermsAndService.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="tos">
				<div className="tos__header padding" id="particles">
					<h1 className="tos__header__heading">Terms of Service</h1>
				</div>
				<div className="tos__body padding">
					<p className="document">
						This is the terms of the service.<br />
						<br />
						<span className="bold-head">DEFINITIONS</span><br /> <br />
						1.1 The following definitions apply to this Contract:
						<br /> <br />
						<span className="bold">"Wyvern"</span> refers to Wyvern.
						<br /> <br />
						<span className="bold">"Wyvern"</span> refers to Wyvern.
						<br /> <br />
						<span className="bold">"Wyvern"</span> refers to Wyvern.
						<br /> <br />
						<span className="bold">"Wyvern"</span> refers to Wyvern.
						<br /> <br />
						<span className="bold-head">AGREEMENT</span> <br /> <br />
						2.1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.4 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.5 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.6 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.7 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.8 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.9 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> 2.10 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						<br /> <br /> <span className="bold-head">REFUND POLICY</span>
						<br /> <br /> Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> <br />
						(i) Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> <br />
						(ii) Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</p>
				</div>
			</div>
		</>
	);
}
import "./TermsAndService.scss";

export default TermsAndService;

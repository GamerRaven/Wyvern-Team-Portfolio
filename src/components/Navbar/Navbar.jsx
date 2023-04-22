import React from "react";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";

//Image imports
import navbrand from '../../assets/navbrand.png'

function Navbar(props) {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<div>
			<div
				className={click ? "main-container" : ""}
				onClick={() => Close()}
			/>
			<nav className="navbar padding" onClick={(e) => e.stopPropagation()}>
				<div className="nav-container">
					<NavLink to="/" className="nav-logo">
						<img
							src={navbrand}
							alt=""
							className="nav-logo__icon"
						/>
					</NavLink>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<NavLink
								to="/"
                                exact
								className="nav-links"
                                activeClassName="active-links"
								onClick={click ? handleClick : null}
                                
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/portfolio"
								className="nav-links"
                                activeClassName="active-links"
								onClick={click ? handleClick : null}
							>
								Portfolio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/tos"
								className="nav-links"
                                activeClassName="active-links"
								onClick={click ? handleClick : null}
							>
								Terms of Service
							</NavLink>
						</li>
                        <li className="nav-item">
                            <a href="https://discord.com/invite/RqSrvBefHE" target='_blank' className="nav-links">Join Discord</a>
						</li>
					</ul>
					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fa fa-times" : "fa fa-bars"}></i>
					</div>
				</div>
			</nav>
		</div>
	);
}
import "./Navbar.scss";

export default Navbar;

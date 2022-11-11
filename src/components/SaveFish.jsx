import React, { useEffect } from "react";
import laptopSrc from "../media/savefish.png";
import reactIcon from "../media/react.svg";
import reduxIcon from "../media/redux.svg";
import railsIcon from "../media/rails-plain.svg";
import postgresIcon from "../media/postgres.svg";
import metaMask from "../media/metamask.png";
import eth from "../media/eth.png";
import rubyIcon from "../media/ruby-plain.svg";
import amazonIcon from "../media/amazons3.svg";
import twilio from "../media/twilio.svg";
export default function SaveFish() {
	useEffect(() => {
		document.body.style.setProperty("--projecthover-color", "rgba(37, 197, 218,0.5)");
	}, []);
	return (
		<div className="SingleProject">
			<div className="SingleProject__top__row">
				<div className="SingleProject__image__container">
					<img className="laptop" src={laptopSrc} alt="laptop" />
				</div>
				<div
					className="SingleProject__title_wrapper"
					style={{
						background:
							"linear-gradient(180deg,transparent 65%, rgba(141, 85, 255,0.5)  65%, rgba(141, 85, 255,0.5) 80%, rgba(37, 197, 218,0.8) 80%,rgba(37, 197, 218,0.8) 87%,transparent 87%)",
					}}>
					<h1>Mozam 🚀🎣</h1>
				</div>
				<div className="SingleProject__button__links">
					<a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=TE36qd0o87k">
						<button>Demo Video 🎥</button>
					</a>
					<a rel="noreferrer" target="_blank" href="https://github.com/mustafabin/ub-hackathon-fall-2022">
						<button>
							Repository <span>🗄</span>
						</button>
					</a>
				</div>
			</div>
			<div className="SingleProject__bottom_container">
				<h1>Tech Used 🖥</h1>
				<div className="SingleProject__image__array__container">
					<img src={metaMask} alt="devIcon" title="MetaMask" />
					<img style={{ width: "1rem" }} src={eth} alt="devIcon" title="Ethereum" />
					<img src={amazonIcon} alt="devIcon" title="Amazon S3" />
					<img src={twilio} alt="devIcon" title="Twilio" />
					<img src={railsIcon} alt="devIcon" title="Rails" />
					<img src={rubyIcon} alt="devIcon" title="Ruby" />
					<img src={postgresIcon} alt="devIcon" title="PostgreSQL" />
					<img src={reactIcon} alt="devIcon" title="React.js" />
					<img src={reduxIcon} alt="devIcon" title="Redux" />
				</div>
				<p>
				The Rare Fish marketplace was an idea my team, and I built for a 24hr hackathon. I loved integrating new technologies I hadn't worked with before, like MetaMask, to
                    perform transactions on the Ethereum blockchain with our cryptocurrency on the Goerli test network. We also implemented
                    Websockets for real-time chat and Twilio to send SMS verification codes.  
				</p>
			</div>
		</div>
	);
}

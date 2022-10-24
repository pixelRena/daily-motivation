import '../css/Home.css';
import { useState } from 'react';

const Home = () => {
	const [ color, setColor ] = useState("#9eb4e7");

	const changeTheme = (c) => {
		setColor(c);
		document.body.style.backgroundColor = c;
	};

	return(
		<section id="homeSection">
			<div className="home-grid">
				<div className="home-item">
					<p>Change color theme:</p>
					<button className="btn btn-light me-3 p-3 rounded-5" onClick={() => changeTheme("#000")} style={{backgroundColor: "#000"}}></button>
					<button className="btn btn-light p-3 rounded-5" onClick={() => changeTheme("orange")} style={{backgroundColor: "orange"}}></button><br/>
					<button className="btn btn-light mt-3 rounded-5" onClick={() => changeTheme("#9eb4e7")}>Default</button>
				</div>
				<div className="home-item">
					<div>
						<label htmlFor="mood">Type what you are feeling right now:</label>
						<input className="form-control mt-3" id="mood" type="text"/>
					</div>
					<div className="mt-2">
						<p>Suggestions:</p>
						<button className="btn btn-transparent rounded-5 me-2">
							Down
						</button>
						<button className="btn btn-transparent rounded-5 me-2">
							Bored
						</button>
						<button className="btn btn-transparent rounded-5 me-2">
							Anxious
						</button>
						<button className="btn btn-transparent rounded-5 me-2">
							Lazy
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
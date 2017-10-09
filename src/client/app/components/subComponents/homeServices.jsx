import React from 'react';

export default function HomeServices(props) {
	return (

		<div className="album text-muted">
			<div className="container-fluid">
				<div className="row">
					<div className="card col-md-4">
						<img 
							className = "album"
							data-src="holder.js/100px280/thumb" alt="100%x280" 
							src="public/assets/homeal1.jpg" data-holder-rendered="true" />
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                 This content is a little bit longer.</p>
					</div>
					<div className="card  col-md-4">
						<img 
							className = "album"
							data-src="holder.js/100px280/thumb" alt="100%x280" 
							src="public/assets/homeal2.jpg" data-holder-rendered="true" />
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                 This content is a little bit longer.</p>
					</div>
					<div className="card  col-md-4">
						<img 
							className = "album"
							data-src="holder.js/100px280/thumb" alt="100%x280" 
							src="public/assets/homeal2.jpg" data-holder-rendered="true" />
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                 This content is a little bit longer.</p>
					</div>        
				</div>
			</div>
		</div>
	);
}
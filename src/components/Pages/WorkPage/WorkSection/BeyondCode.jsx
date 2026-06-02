import React from 'react'

const BeyondCode = ({ list = [] }) => {
	return (
		<section className="beyond-section">
			<div className="section-heading">
				<h2>Beyond Code</h2>
			</div>

			<div className="beyond-grid">
				{list.map((item) => (
					<div key={item.id} className="beyond-card">
						<div className="beyond-title">{item.title}</div>
						<div className="muted">{item.desc}</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default BeyondCode

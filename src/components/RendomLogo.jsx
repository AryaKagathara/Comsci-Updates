import React from "react";

// Cap at 12 logos (was 18) to cut DOM size — Lighthouse flagged #ren_logo with 18 children.
// Switched from <div background-image> to <img alt> so logos are crawlable trust signals,
// and added loading="lazy" + decoding="async" since the row sits below the fold.
const imgQty = 12;

const RendomLogo = () => {
	const numbers = Array.from({ length: imgQty }, (_, i) => i + 1);

	return (
		<>
			<div className="rendom">
				<div className="container">
					<div className="text mt-2" data-scroll data-scroll-speed=".1">
						<h2>Built for Global Trust</h2>
						<p className="my-4">Working with Comsci feels like having an in-house team. We operate on overlapping hours with New York, London, and Sydney time zones. Our process is optimized for Western GDPR & HIPAA compliance , secure IP ownership transfer, and clear, asynchronous communication.</p>
					</div>
					<div className="logo_section" id="ren_logo" data-scroll data-scroll-speed=".4">
						{numbers.map((num) => (
							<img
								key={num}
								src={`/images/clients/client-logo-${num}.svg`}
								alt={`Comsci client ${num} logo`}
								width={150}
								height={80}
								loading="lazy"
								decoding="async"
								style={{ display: 'inline-flex', boxSizing: 'border-box' }}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default RendomLogo;
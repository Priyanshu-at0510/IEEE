import React from 'react';
import '../App.css';
import ai from '../assets/ai.jpeg';
import Embedded_system from '../assets/ES.jpeg';
import SignalProcessing from '../assets/SP.jpeg';
import ESMP from "../assets/ESMP.jpeg"
import hackathon from "../assets/hackathon.jpeg"
const events = [
	{
		title: 'ARTIFICIAL INTELLIGENCE & ROBOTICS',
		
		image: ai,
		description:
			'Focuses on research and innovation in Machine Learning, Computer Vision, and autonomous systems aligned with IEEE AI and Robotics fields.',
	},
	{
		title: 'EMBEDDED SYSTEMS & IoT',
		
		image: Embedded_system,
		description:
			'Explores real-time systems, microcontrollers, and the Internet of Things (IoT), bridging hardware-software systems under IEEE standards.',
	},
	{
		title: 'SIGNAL PROCESSING & COMMUNICATIONS',
		
		image: SignalProcessing,
		description:
			'Covers theoretical and applied research in digital signal processing, wireless communication, and computational theory.',
	},{
		title:"Embedded Systems & Microcontroller Programming",
		image:ESMP,
		description:"Dive into the world where software meets hardware! This hands-on workshop introduces you to the fundamentals of embedded systems — the brains behind modern electronics. You'll learn how microcontrollers like the Arduino, ESP32, and STM32 work, how to interface them with sensors and actuators, and how to write firmware to control real-world devices."


	},{
		title:"Mini Hackathon for Innovation",
		image:hackathon,
		description:"24-hr or 48-hr coding/hardware hack focused on real-world problems."
	}
];

function EventsPage() {
	return (
		<div className="events-page">
			<h1>IEEE Student Chapter Interest Groups</h1>
			<div className="events-grid">
				{events.map((event, idx) => (
					<div className="event-card" key={idx}>
						<div className="event-image-wrapper">
							<img
								src={event.image}
								alt={event.title}
								className="event-image"
							/>
						</div>
						<div className="event-content">
							<h2 className="event-title">{event.title}</h2>
							<span className="event-date">{event.date}</span>
							<p className="event-description">{event.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="no-events-message">
            Stay tuned for upcoming IEEE technical events and workshops.
        </div>
		</div>
	);
}

export default EventsPage;


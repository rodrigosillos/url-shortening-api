import React from 'react';

export const ReferenceData = [
	{
		id: 1,
		groupTitle: 'Features',
		links: ['Link Shortening', 'Branded Links', 'Analytics']
	},
	{
		id: 2,
		groupTitle: 'Resources',
		links: ['Blog', 'Developers', 'Support']
	},
	{
		id: 3,
		groupTitle: 'Company',
		links: ['About', 'Our Team', 'Careers', 'Contact']
	}
];

export function RenderReferenceSection(props) {
	return (
		<div className={`reference-group-${props.id}`} key={props.id}>

			<h5 className="group-title">
				{ props.groupTitle }
			</h5>

			<ul>
				{ props.links.map(RenderLink) }
			</ul>

		</div>
	)
}

function RenderLink(link, index) {
	return <li key={index}>
						<a className="navlink" href="./">
							{link}
						</a>
					</li>
}
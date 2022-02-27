import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faGithub,
	faDiscord,
	faTelegram,
	faFacebook,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
	return (
		<div>
			<a
				href="https://t.me/DanteDev2102"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					className="icon telegram"
					icon={faTelegram}
				/>
			</a>
			<a
				href="https://github.com/DanteDev2102"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					className="icon github"
					icon={faGithub}
				/>
			</a>
			<a
				href="https://www.codesociety.dev/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					className="icon discord"
					icon={faDiscord}
				/>
			</a>
			<a
				href="https://www.facebook.com/DanteAcosta2102/"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					className="icon facebook"
					icon={faFacebook}
				/>
			</a>
			<a
				href="https://www.instagram.com/dantedev.js/?hl=es-la&theme=dark"
				target="_blank"
				rel="noreferrer"
			>
				<FontAwesomeIcon
					className="icon instagram"
					icon={faInstagram}
				/>
			</a>
		</div>
	);
};

export default Social;

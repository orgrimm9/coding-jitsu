import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-purple-900 text-center py-5">
      <div class="container flex flex-wrap items-center justify-between mx-auto px-5">
        <p className="text-xl text-white w-full md:w-auto mb-4 md:mb-0">
          Built with ❤ by {<strong>Humblefool986</strong>} ✌
        </p>
        <ul class="flex text-white text-xl mx-auto md:mr-0">
          <li>
            <a
              class="w-10 h-10 flex mx-2 items-center justify-center border border-white rounded-full"
              href="#"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              class="w-10 h-10 flex mx-2 items-center justify-center border border-white rounded-full"
              href="#"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              class="w-10 h-10 flex mx-2 items-center justify-center border border-white rounded-full"
              href="#"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

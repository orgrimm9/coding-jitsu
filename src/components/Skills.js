import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faReact,
  faNodeJs,
  faJava,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';

function Skills() {
  return (
    <section className="py-10" id="skills">
      <div className="container text-center mx-auto">
        <h2 className="text-4xl font-bold py-4">Skills</h2>
        <ul className="flex w-full">
          <li className="flex-1 text-5xl text-orange-500">
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li className="flex-1 text-5xl text-blue-500">
            <FontAwesomeIcon icon={faCss3} />
          </li>
          <li className="flex-1 text-5xl text-blue-400">
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li className="flex-1 text-5xl text-green-600">
            <FontAwesomeIcon icon={faNodeJs} />
          </li>
          <li className="flex-1 text-5xl text-orange-400">
            <FontAwesomeIcon icon={faJava} />
          </li>
          <li className="flex-1 text-5xl text-blue-500">
            <FontAwesomeIcon icon={faDocker} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;

import React from 'react';
import ProjectsList from './ProjectsList';

function Projects() {
  return (
    <section className="py-2" id="projects">
      <div className="container text-center mx-auto">
        <h2 className="text-4xl font-bold">Projects</h2>
        <ul className="inline-flex w-auto my-4">
          <li>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-purple-600 bg-purple-200 uppercase last:mr-0 mr-1">
              All
            </span>
          </li>
          <li>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-purple-600 bg-purple-200  last:mr-0 mr-1">
              ReactJS
            </span>
          </li>
          <li>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-purple-600 bg-purple-200 last:mr-0 mr-1">
              NodeJS
            </span>
          </li>
          <li>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-purple-600 bg-purple-200 last:mr-0 mr-1">
              GraphQL
            </span>
          </li>
        </ul>
        <ProjectsList />
      </div>
    </section>
  );
}

export default Projects;

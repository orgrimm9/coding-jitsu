import React from 'react';

function ProjectsList() {
  return (
    <div class="flex flex-wrap mt-6">
      <div
        class="project w-1/2 md:w-1/3 h-40 md:h-64 p-2"
        data-tags="css,react"
      >
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80"
          alt="project"
        />
      </div>
      <div class="project w-1/2 md:w-1/3 h-40 md:h-64 p-2" data-tags="node">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="project"
        />
      </div>
      <div class="project w-1/2 md:w-1/3 h-40 md:h-64 p-2" data-tags="css">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
          alt="project"
        />
      </div>
      <div
        class="project w-1/2 md:w-1/3 h-40 md:h-64 p-2"
        data-tags="css,react,node"
      >
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
          alt="project"
        />
      </div>
      <div
        class="project w-1/2 md:w-1/3 h-40 md:h-64 p-2"
        data-tags="react,node"
      >
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1546795729-f3a5d42087f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt="project"
        />
      </div>
      <div class="project w-1/2 md:w-1/3 h-40 md:h-64 p-2" data-tags="css,node">
        <img
          class="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1386&q=80"
          alt="project"
        />
      </div>
    </div>
  );
}

export default ProjectsList;

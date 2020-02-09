import React from 'react';
function About() {
  return (
    <section class="bg-purple-500">
      <div class="flex flex-col md:flex-row">
        <div class="py-20 md:py-56 text-center flex-1">
          <h1 class="text-4xl text-white">Hi, Bashit here! ✌</h1>
          <p class="text-2xl text-white">
            Thanks for visiting my website, I am a Fullstack Developer
            specializing in MERN and Java Fullstack applications.
          </p>
        </div>
        <div class="flex-1 order-first md:order-last">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="About Image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

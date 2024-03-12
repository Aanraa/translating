import React from "react";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="ml-3 text-xl text-white">Translato</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-300 gap-4">
          <a class="mr-5 hover:text-gray-600">Hint</a>
          <a class="mr-5 hover:text-gray-600">Other</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

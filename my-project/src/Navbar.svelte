<script lang="ts">
  import { onMount } from 'svelte';
  let activePage = 'home';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  // Function to check which section is currently in view
  function onScroll() {
    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    const offsets = sections.map(id => {
      const element = document.getElementById(id);
      return element ? element.offsetTop : 0;
    });

    const pageOffset = window.pageYOffset + 200; // 200px offset for better matching
    const currentPageIndex = offsets.findIndex((start, i) => pageOffset >= start && pageOffset < (offsets[i + 1] || Infinity));
    activePage = sections[currentPageIndex] || sections[0];
  }

  // Set up the scroll event listener
  onMount(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
  <div class="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between w-full sm:w-auto">
      <a class="text-white no-underline hover:text-white hover:no-underline" href="/">
        <span class="text-2xl font-extrabold">Manuel's Portfolio</span>
      </a>
      <button class="text-white sm:hidden" on:click={toggleMenu}>
        <!-- Replace with an icon or text for the menu -->
        <span class="text-3xl">☰</span> <!-- Hamburger icon -->
      </button>
    </div>
    <div class={`sm:block ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
      <ul class="list-reset flex flex-col sm:flex-row justify-end flex-1 items-center">
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-white no-underline hover:text-white hover:no-underline"
             class:active={activePage === 'home'}
             href="#home">Home</a>
        </li>
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline"
             class:active={activePage === 'about'}
             href="#about">About</a>
        </li>
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline"
             class:active={activePage === 'projects'}
             href="#projects">Projects</a>
        </li>
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline"
             class:active={activePage === 'skills'}
             href="#skills">Skills</a>
        </li>
        <li class="mr-3">
          <a class="inline-block py-2 px-4 text-gray-600 no-underline hover:text-gray-200 hover:text-underline"
             class:active={activePage === 'contact'}
             href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .active {
    color: #4CAF50; /* Highlight color for the active page link */
  }
</style>

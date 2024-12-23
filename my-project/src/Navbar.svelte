<script lang="ts">
  import { onMount } from 'svelte';

  let activePage: string = "home";
  let isMenuOpen = false;
  let theme = "fun"; // Default theme

  const navbarHeight = 60; // Adjust this value to match your navbar height

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function onScroll() {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id") || "home";
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        activePage = sectionId;
      }
    });
  }

  function scrollToSection(event: Event, section: string) {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  function toggleTheme() {
    theme = theme === "fun" ? "professional" : "fun";
    document.documentElement.setAttribute("data-theme", theme);
  }

  onMount(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
</script>

<nav class="fixed w-full flex justify-between items-center p-5 bg-[var(--navbar-bg-color)] shadow-md">
  <div class="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between w-full sm:w-auto">
      <a class="text-[var(--text-color)] no-underline hover:text-[var(--highlight-color)] hover:no-underline" href="/">
        <span class="text-2xl font-extrabold">Manuel's Portfolio</span>
      </a>
      <button class="text-[var(--text-color)] sm:hidden" on:click={toggleMenu}>
        <span class="text-3xl">☰</span>
      </button>
    </div>
    <div class={`sm:block ${isMenuOpen ? "block" : "hidden"}`} id="menu">
      <ul class="list-reset flex flex-col sm:flex-row justify-end flex-1 items-center">
        {#each ["home", "about", "projects", "skills", "contact"] as section}
          <li class="mr-3">
            <a
              class="inline-block py-2 px-4 text-[var(--accent-color)] no-underline hover:text-[var(--highlight-color)] hover:no-underline"
              class:active={activePage === section}
              href={`#${section}`}
              on:click={(event) => scrollToSection(event, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        {/each}
        <li class="mr-3 flex items-center">
          <span class="mr-2 text-[var(--text-color)]">Fun</span>
          <label class="switch">
            <input type="checkbox" on:change={toggleTheme} checked={theme === "professional"} />
            <span class="slider round"></span>
          </label>
          <span class="ml-2 text-[var(--text-color)]">Professional</span>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .active {
    color: var(--highlight-color); /* Highlight color for the active page link */
  }

  /* Switch styling */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--accent-color);
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--highlight-color);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
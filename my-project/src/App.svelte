<script lang="ts">
  import Navbar from './Navbar.svelte';
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Skills from './Skills.svelte';
  import Contact from './Contact.svelte';
</script>

<Navbar />

<section id="home" class="min-h-screen flex items-center justify-center bg-[var(--bg-color)] text-center p-5">
  <div>
    <h1 class="text-4xl sm:text-5xl font-bold text-[var(--highlight-color)]">Manuel Coronel</h1>
    <p class="text-lg sm:text-xl mt-4 text-[var(--text-color)]">Security Analyst | Web Developer | Fitness Enthusiast</p>
  </div>
</section>

<section id="about" class="min-h-screen">
  <About />
</section>
<section id="projects" class="min-h-screen">
  <Projects />
</section>
<section id="skills" class="min-h-screen">
  <Skills />
</section>
<section id="contact" class="min-h-screen">
  <Contact />
</section>
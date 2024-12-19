<script lang="ts">
  import Navbar from './Navbar.svelte';
  import Home from './Home.svelte';
  import About from './About.svelte';
  import Projects from './Projects.svelte';
  import Skills from './Skills.svelte';
  import Contact from './Contact.svelte';
</script>

<Navbar />

<section id="home" class="min-h-screen">
  <Home />
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
import profileImage from '../assets/profile.jpg';

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden text-white">
      <div className="relative mx-auto grid min-h-[calc(78vh-72px)] max-w-6xl items-center gap-10 px-6 py-12 md:min-h-[calc(82vh-72px)] md:grid-cols-[auto,1fr] md:gap-14 md:py-16">
        <div className="animate-reveal-up mx-auto [animation-delay:0.1s] md:mx-0">
          <div className="animate-float-soft rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
            <img
              src={profileImage}
              alt="Portrait of Nidhivit Kunaputipo"
              className="h-56 w-56 rounded-[1.5rem] object-cover object-center ring-4 ring-emerald-200/70 md:h-80 md:w-80"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="animate-reveal-up text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200 [animation-delay:0.15s]">
            Portfolio 2026
          </p>
          <h1 className="animate-reveal-up mt-3 text-4xl font-extrabold leading-tight tracking-tight [animation-delay:0.25s] md:text-6xl">
            Hi, I'm Nidhivit Kunaputipo
          </h1>
          <p className="animate-reveal-up mt-4 text-lg font-medium text-emerald-100 [animation-delay:0.35s] md:text-2xl">
            Computer Engineering Student | Frontend & Data Developer
          </p>
          <p className="animate-reveal-up mt-4 max-w-2xl text-base text-slate-200 [animation-delay:0.45s] md:text-lg">
            I build practical web and data solutions, from React dashboards and REST APIs to IoT and automation-focused projects.
          </p>

          <div className="animate-reveal-up mt-6 flex flex-wrap items-center justify-center gap-3 [animation-delay:0.55s] md:justify-start">
            {['Web Development', 'Data Workflows', 'IoT Projects'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="animate-reveal-up mt-8 flex flex-wrap items-center justify-center gap-4 [animation-delay:0.65s] md:justify-start">
            <a
              href="#projects"
              className="animate-pulse-glow rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/16nlSeXK4XcUAKglhUXt--cFcNuyGI8zR/view?usp=sharing"
              className="rounded-full border border-emerald-200/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume (PDF)
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

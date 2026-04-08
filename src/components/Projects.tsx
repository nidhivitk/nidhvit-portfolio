interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github?: string;
}

export const Projects = () => {
  const projects: Project[] = [
  {
    id: 1,
    title: 'Jetbot — Voice Command Robotics',
    description:
      'Programmed a Jetbot to listen for sound/voice commands and execute mapped actions for basic robot control.',
    technologies: ['Jetbot', 'Python', 'Robotics', 'Audio Command'],
    link: '#',
  },
  {
    id: 2,
    title: 'Flight Delay Prediction — Data Analytics / ML (AWS)',
    description:
      'Cleaned and analyzed flight datasets and built a prediction workflow to estimate flight delays from historical flight data.',
    technologies: ['Python', 'Data Cleaning', 'Machine Learning', 'AWS'],
    link: '#',
  },
  {
    id: 3,
    title: 'CyberGame — Cyber Awareness Game (Unity)',
    description:
      'Developed an educational game to help non-IT users recognize cyber risks (e.g., unusual email patterns, unsafe Wi-Fi names) through interactive scenarios.',
    technologies: ['Unity', 'C#', 'Game Design', 'Cyber Awareness'],
    link: '#',
  },
  {
    id: 4,
    title: 'Game Development — Pygame',
    description:
      'Designed gameplay systems including map/items and procedural content generation to create replayable game experiences.',
    technologies: ['Python', 'Pygame', 'Game Design', 'Procedural Generation'],
    link: '#',
  },
  {
    id: 5,
    title: 'Smart Parking / Obstacle Assistant (Team) — Arduino',
    description:
      'Built a distance-sensing system using an ultrasonic sensor with multi-level alerts (LED/buzzer) and live distance display on an I²C LCD.',
    technologies: ['Arduino', 'HC-SR04', 'I²C LCD', 'Embedded Systems'],
    link: '#',
  },
  {
    id: 6,
    title: 'FixHub — Community Bug-Fix Website (Design)',
    description:
      'Defined end-to-end workflow in BPMN and designed the system/data model (UML, EERD), then produced a Figma prototype for onboarding, submission, review, and resolution.',
    technologies: ['BPMN', 'UML', 'EERD', 'Figma', 'System Design'],
    link: '#',
  },
  {
    id: 7,
    title: 'Read-a-write-D (Team) — Web App with Database',
    description:
      'Built a database-backed web app with registration/login, novel posting/reading, and payments; designed normalized tables and queries for CRUD and transactions.',
    technologies: ['HTML', 'Bootstrap', 'SQL', 'Web App'],
    link: '#',
  },
  {
    id: 8,
    title: 'Travel Application (Team) — UX/UI Design',
    description:
      'Created end-to-end user flows, wireframes, and hi-fi prototypes in Figma, defining a consistent component/style system and refining usability.',
    technologies: ['Figma', 'UX/UI', 'Prototyping', 'Design System'],
    link: '#',
  },
  {
    id: 9,
    title: 'Kao Kai Jeow — Java',
    description:
      'Built a GUI for a Thai omelet-cooking machine with ingredient selection, cooking options, and an interactive sauce-painting feature on a preview.',
    technologies: ['Java', 'GUI', 'Event-Driven UI'],
    link: '#',
  },
  {
    id: 10,
    title: 'Ped Kod Nam — Java',
    description:
      'Created a vending machine UI with selection-to-payment flow and a cup-decoration canvas for freehand drawing, managing clear state transitions.',
    technologies: ['Java', 'GUI', 'State Management'],
    link: '#',
  },
];

  return (
    <section id="projects" className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          Featured Projects
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-slate-300 bg-white/95 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-500 hover:shadow-xl dark:border-slate-700/80 dark:bg-slate-800/90 dark:hover:border-teal-400"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="animate-fade-in rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                {/* <a
                  href={project.link}
                  className="rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View Project
                </a> */}
                {project.github && (
                  <a
                    href={project.github}
                    className="rounded-lg border border-teal-500 px-4 py-2 text-xs font-semibold text-teal-600 transition hover:bg-teal-500 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-400 dark:hover:text-slate-900"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

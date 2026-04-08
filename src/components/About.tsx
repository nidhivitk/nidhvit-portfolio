export const About = () => {
  return (
    <section id="about" className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          About Me
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-5 rounded-xl border border-slate-300 bg-white/95 p-6 text-base leading-relaxed text-slate-800 shadow-md backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/85 dark:text-slate-300">
            <p className="transition-all duration-500 hover:text-slate-900 dark:hover:text-white">
              I'm a fourth-year Computer Engineering student at SIIT, Thammasat University (GPA 3.07), with hands-on experience in frontend development, data workflows, and system design.
            </p>
            <p className="transition-all duration-500 hover:text-slate-900 dark:hover:text-white">
              At IEAT, I work on cleaning and integrating industrial datasets, designing databases, building REST APIs, and developing web dashboards for searchable factory and estate profiles.
            </p>
            <p className="transition-all duration-500 hover:text-slate-900 dark:hover:text-white">
              Previously, as a Frontend Developer intern at SBP Digital Service, I built a React-based internal bug reporting system and integrated APIs for end-to-end tracking workflows.
            </p>
            <p className="transition-all duration-500 hover:text-slate-900 dark:hover:text-white">
              My projects span web apps, robotics, and smart IoT systems, and my publication at JCSSE 2025 focuses on secure stream processing and fine-grained access control for Healthcare IoT.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                title: 'Programming Languages',
                skills: ['Java', 'Python', 'HTML', 'CSS', 'SQL', 'JavaScript', 'TypeScript'],
                color: 'from-teal-500 to-cyan-500',
              },
              {
                title: 'Frameworks & Libraries',
                skills: ['React', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
                color: 'from-emerald-500 to-teal-500',
              },
              {
                title: 'Tools & Technologies',
                skills: ['Arduino', 'Figma', 'Canva', 'Visual Studio', 'Git', 'n8n', 'App Sheet', 'RapidMiner'],
                color: 'from-cyan-500 to-sky-500',
              },
              {
                title: 'Soft Skills',
                skills: ['Time Management', 'Communication', 'Active Learning', 'Adaptability', 'Problem-solving'],
                color: 'from-green-500 to-teal-500',
              },
            ].map((category) => (
              <div key={category.title} className="transform transition-all duration-300 hover:scale-105">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-700 dark:text-slate-300">
                  {category.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`animate-fade-in rounded-full bg-gradient-to-r ${category.color} px-3 py-1 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

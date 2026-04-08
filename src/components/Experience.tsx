export const Experience = () => {
  const experiences = [
    {
      id: 2,
      title: 'Data / Full-Stack Developer',
      company: 'Industrial Estate Authority of Thailand (IEAT)',
      period: 'Jan 2026 - Present',
      description:
        'Clean and integrate factory/estate data, design and implement the database, build REST APIs, and develop a web dashboard for searchable estate/factory profiles.',
      highlights: [
        'Cleaned and standardized factory/estate datasets (e.g., codes, duplicates, inconsistent formats) to prepare data for reliable querying and display.',
        'Designed a relational database schema (entities, keys, relationships) and implemented the database to store integrated records across multiple sources.',
        'Built RESTful APIs to serve factory and estate information, enabling search and detail endpoints for downstream applications.',
        'Developed a web dashboard/website to present estate and factory profiles, integrating the APIs for real-time retrieval and filtering.',
      ],

    },
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'SBP Digital Service Co., LTD',
      period: 'June 2025 - July 2025',
      description:
        'Built a React + React-Bootstrap internal bug reporting app and integrated REST APIs for end-to-end issue submission and tracking.',
      highlights: [
        'Developed React frontend components for bug reporting system',
        'Integrated REST APIs for seamless data flow',
        'Implemented React-Bootstrap for responsive UI',
        'Handled issue submission and tracking workflows',
      ],

    },
    
  ];

  return (
    <section id="experience" className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          Experience
        </h2>
        <div className="mt-12 space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-lg border-l-4 border-teal-500 bg-white/95 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-800/90"
            >
              <div className="flex flex-col justify-between md:flex-row md:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                  <p className="mt-2 text-sm font-medium text-teal-700 dark:text-teal-400">{exp.company}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{exp.period}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">{exp.description}</p>
              <ul className="mt-4 space-y-3">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-slate-700 transition-all duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

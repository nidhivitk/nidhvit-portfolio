export const Education = () => {
  const education = [
    {
      id: 1,
      school: 'Sirindhorn International Institution of Technology (SIIT) at Thammasat University',
      period: '2022 - Present',
      degree: 'Computer Engineering (Fourth-year student)',
      gpa: '3.07',
      details: 'SIIT Quarter Scholarship (4 years)',
      courses: [
        'Data Structure and Algorithms',
        'Database Programming Laboratory',
        'Database System',
        'Engineering Statistics',
        'Algorithm Design',
        'Artificial Intelligence',
        'Software Engineering',
        'Operating Systems',
        'Computer Networks & Internetworking',
        'Microcontrollers & Applications',
        'Network Security',
        'Cloud Computing',
        'Internet of Things',
        'Cyber Crimes & Digital Forensics',
        'Big Data Analytics',
        'Robotics and Applications',
        'Game Development',
      ],
    },
    {
      id: 2,
      school: 'Yothinburana School (English Program)',
      period: '2019 - 2021',
      degree: 'Science and Mathematics Program',
      gpa: '3.55',
      details: '',
      courses: [],
    },
  ];

  return (
    <section id="education" className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          Education
        </h2>
        <div className="mt-12 space-y-8">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="transform rounded-lg border border-slate-300 bg-white/95 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/90"
            >
              <div className="flex flex-col justify-between md:flex-row md:items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{edu.school}</h3>
                  <p className="mt-3 text-sm font-medium text-teal-700 dark:text-teal-400">{edu.degree}</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">{edu.period}</p>
                  {edu.details && <p className="mt-2 text-sm text-slate-700 dark:text-slate-400">{edu.details}</p>}
                </div>
                <div className="mt-4 flex items-center gap-2 md:mt-0">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">GPA:</span>
                  <span className="rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-1 text-sm font-bold text-white shadow-lg">
                    {edu.gpa}
                  </span>
                </div>
              </div>
              {edu.courses.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-700 dark:text-slate-300">
                    Relevant Courses
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="animate-fade-in rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 px-3 py-1 text-xs font-semibold text-teal-800 shadow-sm transition-all duration-300 hover:shadow-md dark:from-teal-900 dark:to-emerald-900 dark:text-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

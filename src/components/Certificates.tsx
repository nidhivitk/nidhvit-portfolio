export const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Certificate MATLAB Fundamental',
      issuer: 'MATLAB',
      year: '2025',
    },
    {
      id: 2,
      title: 'Certificate of Participant in SIIT Data Structure Coding Competition',
      issuer: 'SIIT',
      year: '2024',
    },
    {
      id: 3,
      title: 'Certification of Participant in Intania Case Competition',
      issuer: 'Intania',
      year: '2024',
    },
    {
      id: 4,
      title: 'Certificate of Participant in TU Startup Contest',
      issuer: 'Thammasat University',
      year: '2024',
    },
    {
      id: 5,
      title: 'Certificate of Participant in SIIT First Aid Training',
      issuer: 'SIIT',
      year: '2023',
    },
  ];

  return (
    <section id="certificates" className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Certificates & Achievements</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div key={cert.id} className="rounded-lg border border-slate-300 bg-white/95 p-6 shadow-md backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/90">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{cert.title}</p>
                  <p className="mt-2 text-xs text-slate-700 dark:text-slate-400">{cert.issuer}</p>
                </div>
                <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

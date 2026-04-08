export const Publications = () => {
  const publications = [
    {
      id: 1,
      title: 'An Integrated Stream Processing Framework for Secure and Fine-Grained Access Control in Healthcare IoT',
      authors: 'Vayuphak Saengthong; Chatdanai Wongsuwan; Nidhivit Kunaputipo; Somchart Fugkeaw',
      conference: 'JCSSE 2025',
      year: 2025,
      month: 'November',
      pages: '217-224',
      doi: '10.1109/JCSSE67377.2025.11297908',
      description: 'Research on secure stream processing for healthcare IoT systems with fine-grained access control mechanisms.',
    },
  ];

  return (
    <section id="publications" className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Publications</h2>
        <div className="mt-12 space-y-6">
          {publications.map((pub) => (
            <div key={pub.id} className="rounded-lg border-l-4 border-emerald-500 bg-white/95 p-6 shadow-md backdrop-blur-sm dark:bg-slate-800/90">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pub.title}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-400">{pub.authors}</p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-700 dark:bg-teal-900 dark:text-teal-200">
                  {pub.conference}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {pub.month} {pub.year}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">pp. {pub.pages}</span>
              </div>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{pub.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">DOI:</span>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-600 hover:underline dark:text-teal-400"
                >
                  {pub.doi}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Activities = () => {
  const activities = [
    {
      id: 1,
      role: 'SIIT Ambassador 4th President',
      period: '2023 - Present',
    },
    {
      id: 2,
      role: 'SIIT Ambassador Club Member',
      period: '2023 - Present',
    },
    {
      id: 3,
      role: 'Thammasat Game Staff',
      period: '2025',
    },
    {
      id: 4,
      role: 'TU Folksong Concert Ticket Team',
      period: '2024',
    },
    {
      id: 5,
      role: 'The Challenger Competition Participant (TUBC)',
      period: '2024',
    },
    {
      id: 6,
      role: 'SIIT Insights Camp Staff - Business Analytics Game',
      period: '2023',
    },
    {
      id: 7,
      role: 'SIIT Representative - TU Open House',
      period: '2023',
    },
    {
      id: 8,
      role: 'SIIT Representative - SIIT First Meet',
      period: '2023',
    },
    {
      id: 9,
      role: 'SIIT Representative - TU Freshy Games',
      period: '2022',
    },
    {
      id: 10,
      role: "McDonald's Corporation Part-Time Staff",
      period: '2022',
    },
  ];

  return (
    <section id="activities" className="bg-transparent py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">Activities & Roles</h2>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 rounded-lg border border-slate-300 bg-white/95 p-4 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/90">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500"></span>
              <div className="flex-1">
                <p className="font-medium text-slate-900 dark:text-white">{activity.role}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{activity.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

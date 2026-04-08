export const Contact = () => {
  return (
      <section id="contact" className="relative overflow-hidden py-20 text-slate-900 dark:text-slate-100">
        {/* Section own background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-slate-100 to-sky-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(56,189,248,0.14)_0%,transparent_100%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(14,116,144,0.30)_0%,transparent_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="animate-reveal-up text-center text-3xl font-bold md:text-4xl">
          Contact
        </h2>
        <p className="animate-reveal-up mx-auto mt-4 max-w-2xl text-center text-base text-slate-700 dark:text-slate-300 [animation-delay:0.12s]">
          Feel free to reach out for collaboration or inquiries.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              label: 'Email',
              content: 'nidhivit78@gmail.com',
              href: 'mailto:nidhivit78@gmail.com',
            },
            {
              label: 'Phone',
              content: '+66 96-556-6958',
              href: 'tel:+66965566958',
            },
            {
              label: 'Location',
              content: 'Bangkhen, Bangkok, Thailand',
            },
          ].map((item, index) => (
            <div
              key={item.label}
              className="animate-reveal-up rounded-2xl border border-teal-300/80 bg-white/95 p-6 text-center shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-teal-500/60 dark:border-teal-800/60 dark:bg-slate-800/90"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-lg font-semibold text-slate-900 transition hover:text-teal-700 dark:text-white dark:hover:text-teal-200">
                  {item.content}
                </a>
              ) : (
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="animate-reveal-up mt-10 rounded-2xl border border-teal-300/80 bg-white/95 p-6 text-center shadow-xl backdrop-blur-sm [animation-delay:0.55s] dark:border-teal-800/60 dark:bg-slate-800/90">
          <p className="text-sm uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">Let's Build Something Useful</p>
          <p className="mx-auto mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
            Open to internships, freelance projects, and research collaborations in frontend engineering, data systems, and smart applications.
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <a
              href="mailto:nidhivit78@gmail.com"
              className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Send Email
            </a>
            <a
              href="#projects"
              className="rounded-full border border-teal-500/60 px-6 py-3 text-sm font-semibold text-teal-700 transition hover:bg-teal-50/60 dark:border-teal-300/60 dark:text-teal-200 dark:hover:bg-teal-200/10"
            >
              Explore Projects
            </a>
          </div>
          <div className="mt-8 flex gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/nidhivit-kunaputipo-205b06353"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal-300/60 text-teal-700 transition hover:-translate-y-1 hover:border-teal-500/60 hover:bg-teal-50/60 font-semibold dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-teal-300/60 dark:hover:bg-teal-200/10"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://github.com/nidhivitk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-teal-300/60 text-teal-700 transition hover:-translate-y-1 hover:border-teal-500/60 hover:bg-teal-50/60 font-semibold dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-teal-300/60 dark:hover:bg-teal-200/10"
                title="GitHub"
              >
                GH
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

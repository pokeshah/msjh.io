import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
      <div className={`flex flex-col items-center justify-center min-h-screen p-4`}>
      <section className="w-full max-w-4xl p-5 text-center">
        <Image unoptimized src="/favicon.ico" alt="MSJH Logo" width={150} height={150} className="mx-auto"/>
        <h1 className="text-xl mt-3 mb-0">MSJH.io</h1>
        <section className="mt-4 text-left">
          <h2 className="text-xl font-semibold">General:</h2>
          <ul className="text-slate-700 list-disc pl-5 underline decoration-slate-500/30">
            {[
              {href: '/s', text: 'Countdown Schedule'},
              {href: '/map', text: 'Campus Map'},
              {href: '/school', text: 'School Homepage'},
              {href: '/bell', text: 'Bell Schedule'},
              {href: '/aeries', text: 'Student Aeries'},
              {href: '/dates', text: 'Important Dates'},
              {href: '/warriors', text: 'MSJ Instagram'},
              {href: '/discord', text: 'School-Wide Discord Servers'},
            ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} target="_blank"
                        className="hover:underline hover:decoration-slate-500">{link.text}</Link>
                </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 text-left">
          <h2 className="text-xl font-semibold">Student Activities</h2>
          <ul className="text-slate-700 list-disc pl-5 underline decoration-slate-500/30">
            {[
              {href: '/asb', text: 'ASB Website'},
              {href: '/ac', text: 'Academic Club Discord'},
              {href: '/cs', text: 'CS Club Homepage'},
              {href: '/cs/signup', text: 'CS Club Signup', indent: true},
              {href: '/bio', text: 'Biology Club Discord'},
              {href: '/ai', text: 'AI Club Discord'},
              {href: '/math', text: 'Math Club Discord'},
              {href: '/esports', text: 'E-Sports Club Discord'},
              {href: '/jp', text: 'Japan Club Discord'},
              {href: '/jp/signup', text: 'Japan Club Signup', indent: true},
            ].map((link) => (
                <li key={link.href} className={link.indent ? "ml-8" : ""}>
                  <Link href={link.href} target="_blank"
                        className="hover:underline hover:decoration-slate-500">{link.text}</Link>
                </li>
            ))}
          </ul>
        </section>

        <footer className="mt-3 text-sm text-slate-500 w-full max-w-4xl text-center">
          Do you have something you think should be linked here? You can find me on Discord
          as <strong>@pokeshah</strong>
          <br></br>
          This website is <Link href="https://github.com/pokeshah/msjh.io" target="_blank"
                                className="text-slate-700 decoration-slate-500/30 underline hover:decoration-slate-700">open-source</Link>. This webpage isn&#39;t
          endorsed by the school or official in any way &copy; 2025
        </footer>
      </section>
    </div>
  );
}

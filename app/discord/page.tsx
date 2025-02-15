import Link from 'next/link';
import Image from 'next/image';

export default function discord() {
    return (
        <>
            <div className={`top-0 place-items-center flex-col items-center justify-center min-h-screen p-4`}>
                <section className="w-full max-w-4xl p-5 text-center">
                    <Image src="/favicon.ico" alt="MSJH Logo" width={150} height={150} className="mx-auto"/>
                    <h1 className="text-xl mt-3 mb-0">MSJH.io</h1>
                    <section className="mt-4 text-left">
                        <h2 className="text-xl font-semibold">Links</h2>
                        <ul className="text-slate-700 list-disc pl-5 underline decoration-slate-500/30">
                            {[
                                {href: 'https://discord.gg/rpSkRX49U5', text: 'C/O 28'},
                                {href: 'https://discord.gg/AmqGjECc7x', text: 'C/O 27'},
                                {href: 'https://discord.gg/T5eC435k9c', text: 'C/O 26'},
                                {href: 'https://discord.gg/McjFgVp2J3', text: 'C/O 25'},
                                {href: 'https://discord.gg/PMXTW2N5yJ', text: 'School Server & C/O 23'},
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} target="_blank"
                                          className="hover:underline hover:decoration-slate-500">{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            <footer className="bottom-0 mt-3 text-sm text-slate-500 w-full max-w-4xl text-center">
                Do you have something you think should be linked here? You can find me on Discord
                as <strong>@pokeshah</strong>
                <br></br>
                This website is <Link href="https://github.com/adrian154/MSJH.io" target="_blank"
                                      className="text-slate-700 decoration-slate-500/30 underline hover:decoration-slate-700">open-source</Link>.
                This webpage isn&#39;t
                endorsed by the school or official in any way &copy; 2025
            </footer>
            </div>
        </>
    );
}

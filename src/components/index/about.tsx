import Typewriter from 'typewriter-effect';
import Techicon from '@/components/techicon';

export default function About({ refID, inView }: { refID: any; inView: boolean }) {
    return (
        <>
            <section className='relative bg-slate-950 pb-8'>
                <h1 className={`text-white font-bold sm:text-6xl text-4xl font-kanit text-center pb-8`}>
                    Hakkımda ufak tefek bilgiler.
                </h1>
                <div className='flex flex-col max-w-6xl w-full mx-auto '>
                    <div className='bg-slate-900 self-center w-3/4 rounded-md overflow-hidden border-2 border-blue-700 hover:-translate-y-1 duration-300 p-4 mb-16'>
                        <p ref={refID} className={`text-white text-md font-kanit`}>
                            {inView && (
                                <Typewriter
                                    options={{
                                        delay: 30,
                                        strings: ["Benim adım Yiğit Can, Türkiye içinde İstanbul'da yaşıyorum. Küçüklüğümden beridir hep bilgisayarlara ve kodlamaya meraksardım. Şuan da aktif olarak Frontend kodlaması yapıyor ve öğreniyorum."],
                                        loop: false,
                                        autoStart: true,
                                        deleteSpeed: 604800000,
                                    }}
                                />
                            )}
                        </p>
                    </div>
                    <h2 className={`text-white font-semibold sm:text-2xl text-lg xl:px-0 px-8 font-kanit`}>
                        Aşağıdaki dilleri biliyorum (ayrıca öğreniyorum)
                    </h2>
                    <ul className='flex flex-row flex-wrap gap-2 mt-2 rounded-md w-fit xl:px-0 px-8'>
                        <Techicon href='https://www.javascript.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' delay={0.2} rounded={true} />
                        <Techicon href='https://html.com/html5/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' delay={0.3} />
                        <Techicon href='https://nodejs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' delay={0.5} />
                        <Techicon href='https://reactjs.org/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' delay={0.7} />
                        <Techicon href='https://www.mongodb.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' delay={0.9} />
                        <Techicon href='https://tailwindcss.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' delay={1.1} />
                    </ul>
                    <h2 className={`text-white font-semibold sm:text-2xl text-lg font-kanit text-right pt-24 xl:px-0 px-8`}>
                        Here are some of the tools and services I use during and after development.
                    </h2>
                    <ul className='flex flex-row flex-wrap gap-2 mt-2 self-end rounded-md w-fit xl:px-0 px-8'>
                        <Techicon href='https://code.visualstudio.com/' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' delay={0.1} />
                        <Techicon href='https://www.cloudflare.com/' src='https://cdn.e-z.host/e-zimagehosting/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png' delay={0.7} />
                    </ul>
                </div>
            </section>
        </>
    )
}

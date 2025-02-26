import Link from "next/link";

export default function Navbar({ clickScroll, clickScroll2, pageLoad }: { clickScroll: any, clickScroll2: any, pageLoad: boolean }) {
    return (
        <>
            <header className='relative'>
                <nav className={`${pageLoad ? 'animate-fade-in-top' : 'opacity-0'} fixed flex w-full z-50 bg-slate-950/80 p-4 sm:px-24 px-4 justify-between items-center`}>
                    <Link href='/'>
                        <img draggable={false} className='h-12 w-12 rounded-full' alt="image" src="https://i.hizliresim.com/9yvf0l8.jpg" />
                    </Link>
                    <ul className='flex flex-row gap-x-2'>
                        <li>
                            <button className='text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md' onClick={clickScroll}>
                                Hakkımda
                            </button>
                        </li>
                        <li>
                            <button className='text-white font-kanit text-lg p-2 hover:bg-slate-800 duration-300 rounded-md' onClick={clickScroll2}>
                                Projelerim
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

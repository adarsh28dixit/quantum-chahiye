import logo from '../assets/Qc-logo.png'
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} className="w-[20%]" alt="Flowbite Logo"   />
                </a>
            </div>
        </nav>
    )
}
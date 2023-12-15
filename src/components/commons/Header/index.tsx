import Image from "next/image";
import Link from "next/link";
import { Roboto } from 'next/font/google';
import { Menu } from './Menu';
import { useCallback, useState } from "react";
import { MenuIcon } from "../Icons/MenuIcon";



const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  },[]);
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header 
    className={`${roboto.className} bg-white  text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-28`}
    >
    <Link href="/">
    <Image src="/favicon.svg" width={55} height={55} alt="Doe MT" />
    </Link>
    <button className="p-1 md:hidden" onClick={openMenu}>
    <MenuIcon className="h-black-900 border border-gray-200 w-10 h-10" />
    </button>
    <nav className="hidden md:flex items-center gap-1 text-md">
      <Link className="hover:bg-pink-500 rounded-xl px-4 py-1" href="/">Home</Link>
      <Link className="hover:bg-pink-500 rounded-xl px-4 py-1" href="/">Quem Somos</Link>
      <Link className="hover:bg-pink-500 rounded-xl px-4 py-1" href="/">Quem Recebe</Link>
      <Link className="hover:bg-pink-500 rounded-xl px-4 py-1" href="/">Cadastro</Link>
      <Link className="hover:bg-pink-500 rounded-xl px-4 py-1" href="/">Blog</Link>
      <Link className="hover:bg-pink-500 rounded-xl px-4 py-1" href="/">Contato</Link>
      <Link className="hover:bg-pink-500 bg-gray-300 rounded-xl px-4 py-1" href="/">Faça uma Doação</Link>
    </nav>
    <Menu  isVisible={isMenuOpen} onClose={closeMenu}/>
    
    </header>
    );
};
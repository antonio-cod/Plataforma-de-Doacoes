import Image from "next/image";
import Link from "next/link"
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
    className={`${roboto.className} bg-h-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-28`}
    >
    <Link href="/">
    <Image src="/favicon.svg" width={55} height={55} alt="Ícone da Letra H, Logo de Antonio" />
    </Link>
    <button className="p-1 md:hidden" onClick={openMenu}>
    <MenuIcon className="h-black-500 w-10 h-10" />
    </button>
    <nav className="hidden md:flex items-center gap-10 text-md">
      <Link href="/">Home</Link>
      <Link href="/">Quem Somos</Link>
      <Link href="/">Quem Recebe</Link>
      <Link href="/">Cadastro</Link>
      <Link href="/">Blog</Link>
      <Link href="/">Contato</Link>
      <Link href="/">Faça uma Doação</Link>
    </nav>
    <Menu  isVisible={isMenuOpen} onClose={closeMenu}/>
    
    </header>
    );
};
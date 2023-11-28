import { Roboto } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

const NotFound = () => {
  return (
    <>
     <Head>
      <title>404 | DoeMT</title>
    </Head>
    <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 md:gap-4 px-6 md:px-32">
      <h1 className="text-5xl sm:text-7xl font-bold">404</h1>
        <div className="flex flex-col gap-8 md:gap-4">
          <p>Oop, Não conseguimos encontrar essa página!</p>
          <span>Clique no botão abaixo para ser redirecionado a Pagina Principal</span>
        </div>
      <Link href="/" className={`${roboto.className} p-4 bg-h-blue-500 rounded-xl text-black mt-5 md:mt-12md:text-xl w-fit`}>
      Ir para pagina principal
      </Link>
    </div>
    </>
    
  );
};

export default NotFound;
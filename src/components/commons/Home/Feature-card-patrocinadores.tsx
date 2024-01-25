import Image from "next/image";
import React from "react";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

function Patrocinadores() {
  return (
    <div className='bg-slate-50 dark:bg-transparent space-y-6 py-8 md:py-12 lg:py-24'
    >
      <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
        <h2 className='text-3xl font-bold sm:text-7xl xl:leading-[5rem]'>
        Como ajudar
        </h2>
        <p className={`${roboto.className} mb-12`}>
          Você pode conhecer todas as entidades que fazem parte da plataforma,
          escolher uma ou mais e ajudar na realização dos projetos com sua doação.
          Seja um agente transformador que fomenta e promove o desenvolvimento de
          ações promovidas por Instituições Sociais.
        </p>
      </div>

      <div className='mx-auto grid justify-center items-center text-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 p-4'>
        <div className='overflow-hidden rounded-lg border border-gray-800 p-2'>
          <div className='bg-gray-200 flex h-[400px] flex-col justify-between rounded-md pl-13 p-2'>
          <Image
              src='/cta_1.jpg'
              alt='Faça uma doação'
              width={300}
              height={300}
              className='border-8 border-pink-600 p-2 rounded-full'
            />
            <div className='space-y-2'>
              <h3 className='font-bold'>Faça uma doação</h3>
              <p className={`${roboto.className} mb-12`}>
              Escolha uma das entidades, conheça os projetos, ajude com o valor que puder.
              </p>
            </div>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg border border-gray-800 p-2'>
          <div className='bg-gray-200 flex h-[400px] flex-col justify-between rounded-md pr-13 p-2'>
          <Image
              src='/cta_2.jpg'
              alt='Perguntas Frequentes'
              width={300}
              height={300}
              className='border-8 border-pink-600 p-2 rounded-full'
            />
            <div className='space-y-2'>
              <h3 className='font-bold'>Perguntas Frequentes</h3>
              <p className={`${roboto.className} mb-12`}>
              Saiba tudo sobre a plataforma e sobre as formas de atuação.
              </p>
            </div>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg border border-gray-800 p-2'>
          <div className='bg-gray-200 flex h-[400px] flex-col justify-between rounded-md p-2'>
          <Image
              src='/cta_3.jpg'
              alt='Patrocínio'
              width={300}
              height={300}
              className='md:justify-center md:justify-items-center md:items-center border-8 border-pink-600 p-2 rounded-full'
            />
            <div className='space-y-2'>
              <h3 className='font-bold'>Patrocínio</h3>
              <p className={`${roboto.className} mb-12`}>
              A sua marca e a sua empresa serão muito bem vindas como patrocinadoras.
              </p>
            </div>
          </div>
        </div>

        <div className='overflow-hidden rounded-lg border border-gray-800 p-2'>
          <div className='bg-gray-200 flex h-[400px] flex-col justify-between rounded-md p-3'>
            <Image
              src='/cta_3.jpg'
              alt='Patrocínio'
              width={300}
              height={300}
              className='md:justify-center md:justify-items-center md:items-center border-8 border-pink-600 p-2 rounded-full'
            />
            <div className='space-y-2'>
              <h3 className='font-bold'>Doação em Folha</h3>
              <p className={`${roboto.className} mb-12`}>
              Seus funcionarios podem fazer doações com desconto na folha de pagamento.
              </p>
            </div>
          </div>
        </div>
       </div>
      </div>
  );
}
export default Patrocinadores;
6
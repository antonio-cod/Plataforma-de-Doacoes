import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

export const QuemSomos = () => {
  return (
    <main className='flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between p-40'>
      <div className='h-black-500 flex flex-col items-center xl:items-start gap-4 w-full xl:w-120'>
          <h1 className='text-3xl font-bold sm:text-7xl xl:leading-[5rem]'> 
          Quem Somos
          </h1>
          <h2 className={`${roboto.className} mb-12`}>
          Somos uma ponte entre você e a sua instituição favorita. 
          O DoeMT tem o objetivo de se tornar uma ferramenta de doações contínuas,
          focado na captação de recursos para Organizações Sociais, pretendemos,
          como principal finalidade, dar apoio a essas instituições que, muitas
          vezes, são tão necessárias, mas mesmo assim passam por necessidades, 
          principalmente nesses momentos […]
          </h2>
          </div>
          <div className='relative'>
            <Image
              src='/quemsomos.jpg'
              alt='Quem Somos'
              width={500}
              height={500}
              className='rounded-full'
            />
          </div>
      </main>
  );
};
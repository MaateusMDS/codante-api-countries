import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countries',
  description: 'A list of countries created using Next 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
    <body className={nunitoSans.className}>
      <main className='bg-gray-100 min-h-screen flex flex-col items-center'>
        <nav className='w-full bg-white h-16 flex items-center justify-center'>
          <section className='container flex items-center gap-3'>
            <h1 className='font-bold text-2xl'>Lista de paises</h1>
            <Image src="/logo.svg" alt="Logo da aplicação" width={48} height={48}/>
          </section>
        </nav>
        {children}
      </main>
    </body>
  </html>
  )
}

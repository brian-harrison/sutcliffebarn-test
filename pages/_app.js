import {  Montserrat, Anton } from 'next/font/google';

// export const dancingScript = Dancing_Script({ subsets: ['latin'] });
export const montserrat = Montserrat({ subsets: ['latin'] });
export const anton = Anton({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
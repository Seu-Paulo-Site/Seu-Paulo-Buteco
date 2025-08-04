import '@/app/globals.css';
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Seu Paulo Buteco',
  description: 'Seu Paulo Buteco - O melhor bar de Minas Gerais',
}
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-100 min-h-screen poppins.className"
        style={{
         
          
        }}
      > { children }</body>
    </html >
  )
}
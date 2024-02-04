import Header from './(components)/Header'
import Footer from './(components)/Footer'
import './global.css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" suppressHydrationWarning>
      
      <body className="bg-gray-200 dark:bg-gray-800">
        
      <header>
    <Header/>
      </header>
      <main className='p-44'>
      {children}
      </main>
        
        <footer>
        <Footer/>
        </footer>
        </body>
    </html>
  )
}

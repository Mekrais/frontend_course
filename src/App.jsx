import Header from './Header'
import MainBody from './MainBody'
import Footer from './Footer'
import './index.css'

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex-grow w-full max-w-4xl p-6 bg-white shadow rounded-lg">
        <MainBody />
      </main>
      <Footer />
    </div>
  )
}


export default App

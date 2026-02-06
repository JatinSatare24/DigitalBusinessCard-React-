import { Header } from './components/Header'
import { About } from './components/About'
import { Footer } from './components/Footer'

export function App() {
    return (
        <>
            <div id='appContainer'>
                <Header />
                <About />
                <Footer />
            </div>
        </>
    )
}
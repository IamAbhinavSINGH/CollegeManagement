import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
    </div>
  )
}

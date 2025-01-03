import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { NoticeSection } from '../../components/NoticeSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <NoticeSection />
    </div>
  )
}


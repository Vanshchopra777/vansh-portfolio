import Hero from '../components/Hero'
import WorkPreview from '../components/WorkPreview'
import Highlights from '../components/Highlights'
import Skills from '../components/Skills'
import About from '../components/About'
import Timeline from '../components/Timeline'
import Leadership from '../components/Leadership'
import Certifications from '../components/Certifications'
import CodingProfiles from '../components/CodingProfiles'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkPreview />
      <Highlights />
      <Skills />
      <About />
      <Timeline />
      <Leadership />
      <Certifications />
      <CodingProfiles />
      <Footer />
    </main>
  )
}

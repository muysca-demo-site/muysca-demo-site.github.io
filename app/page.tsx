import { ProgressBar } from "@/components/progress-bar"
import { Navigation } from "@/components/navigation"
import { LandingSection } from "@/components/sections/landing-section"
import { StorySection1 } from "@/components/sections/story-section-1"
import { StorySection2 } from "@/components/sections/story-section-2"
import { StorySection3 } from "@/components/sections/story-section-3"
import { StorySection4 } from "@/components/sections/story-section-4"
import { StorySection5 } from "@/components/sections/story-section-5"
import { StorySection6 } from "@/components/sections/story-section-6"
import { StorySection7 } from "@/components/sections/story-section-7"
import { StorySection8 } from "@/components/sections/story-section-8"
import { InfoSection } from "@/components/sections/info-section"
import { MusicPlayer } from "@/components/music-player"

export default function Home() {
  return (
    <main className="relative">
      <ProgressBar />
      <Navigation />
      <MusicPlayer />

      <LandingSection />
      <StorySection1 />
      <StorySection2 />
      <StorySection3 />
      <StorySection4 />
      <StorySection5 />
      <StorySection6 />
      <StorySection7 />
      <StorySection8 />
      <InfoSection />
    </main>
  )
}

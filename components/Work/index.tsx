import DisplayCard from './DisplayCard'
import { BiLogoReact, BiLogoTailwindCss, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import spotifyClonePreview from '@/public/spotifyClonePreview.png'
import watchCarousel from '@/public/watchCarousel.png'
import artGalary from '@/public/artgalary.png'

const Work = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto mb-24" id="work">
        <h2 className="text-3xl font-bold mb-2 text-neutral-100">Work</h2>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 ">
          <DisplayCard
            key={1}
            title="Spotify Clone"
            techIcon={[< BiLogoReact />, <BiLogoTailwindCss />]}
            techName={["React", "Tailwind CSS"]}
            demoURL="https://nextjs.org/docs/app/building-your-application/optimizing/images"
            description="Lorem"
            imagePath={spotifyClonePreview}
          />
          <DisplayCard
            key={2}
            title="Watch Carousel"
            techIcon={[<BiLogoHtml5 />, <BiLogoCss3 />, <BiLogoJavascript />]}
            techName={["HTML", "CSS", "JavaScript"]}
            demoURL="https://nextjs.org/docs/app/building-your-application/optimizing/images"
            description="Lorem"
            imagePath={watchCarousel}
          />
          <DisplayCard
            key={3}
            title="Art Galary"
            techIcon={[<BiLogoHtml5 />, <BiLogoCss3 />]}
            techName={["HTML", "CSS", "JavaScript"]}
            demoURL="https://nextjs.org/docs/app/building-your-application/optimizing/images"
            description="Lorem"
            imagePath={artGalary}
          />
        </div>
      </div>
  )
}

export default Work
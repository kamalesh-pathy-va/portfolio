import { BiLogoReact, BiLogoTailwindCss, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import spotifyClonePreview from '@/public/spotifyClonePreview.png'
import watchCarousel from '@/public/watchCarousel.png'
import artGalary from '@/public/artgalary.png'
import DisplayCard from './DisplayCard'

const Work = () => {
  const cardData = [
    {
      key: 1,
      title: "Spotify Clone",
      techIcon: [<BiLogoReact key={1} />, <BiLogoTailwindCss key={2} />],
      techName: ["React", "Tailwind CSS"],
      demoURL: "https://nextjs.org/docs/app/building-your-application/optimizing/images",
      description: "Lorem",
      imagePath: spotifyClonePreview,
    },
    {
      key: 2,
      title: "Watch Carousel",
      techIcon: [<BiLogoHtml5 key={1} />, <BiLogoCss3 key={2} />, <BiLogoJavascript key={3} />],
      techName:["HTML", "CSS", "JavaScript"],
      demoURL: "https://nextjs.org/docs/app/building-your-application/optimizing/images",
      description: "Lorem",
      imagePath: watchCarousel,
    },
    {
      key: 3,
      title: "Art Galary",
      techIcon: [<BiLogoHtml5 key={1} />, <BiLogoCss3 key={2} />],
      techName: ["HTML", "CSS", "JavaScript"],
      demoURL: "https://nextjs.org/docs/app/building-your-application/optimizing/images",
      description: "Lorem",
      imagePath: artGalary,
    }
  ]
  return (
    <section className="w-11/12 md:w-3/4 mx-auto mb-24" id="work">
      <h2 className="text-3xl font-bold mb-2 text-neutral-100">Work</h2>
      <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
        {
          cardData.map((card, index) => (
            <DisplayCard
              key={index}
              title={card.title}
              techIcon={card.techIcon}
              techName={card.techName}
              demoURL={card.demoURL}
              description={card.description}
              imagePath={card.imagePath}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Work
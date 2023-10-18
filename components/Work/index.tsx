import { BiLogoReact, BiLogoTailwindCss, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'
import spotifyClonePreview from '@/public/spotifyClonePreview.png'
import watchCarousel from '@/public/watchCarousel.png'
import artGalary from '@/public/artgalary.png'
import portfolio from '@/public/PortfolioSite.png'
import DisplayCard from './DisplayCard'

const Work = () => {
  const cardData = [
    {
      key: 1,
      title: "Portfolio Site",
      techIcon: [<SiNextdotjs key={1} />, <BiLogoTailwindCss key={2} />, <BiLogoTypescript key={3} />],
      techName: ["Next.js", "Tailwind CSS", "Typescript"],
      demoURL: "https://portfolio-bay-eight-19.vercel.app/",
      description: "My Portfolio site made with Next 13, Tailwind CSS and Typescript",
      imagePath: portfolio,
    },
    {
      key: 2,
      title: "Spotify Clone",
      techIcon: [<BiLogoReact key={1} />, <BiLogoTailwindCss key={2} />],
      techName: ["React", "Tailwind CSS"],
      demoURL: "https://spotify-clone-pi-tan.vercel.app/",
      description: "This is a Spotify web clone made with React.js, Redux toolkit and Tailwind CSS. This is a frontend-only project.",
      imagePath: spotifyClonePreview,
    },
    {
      key: 3,
      title: "Watch Carousel",
      techIcon: [<BiLogoHtml5 key={1} />, <BiLogoCss3 key={2} />, <BiLogoJavascript key={3} />],
      techName:["HTML", "CSS", "JavaScript"],
      demoURL: "https://kamalesh-pathy-va.github.io/watch-carousel/",
      description: "This is a Watch carousel site that displays watches and its features, created with plain HTML, CSS and JS",
      imagePath: watchCarousel,
    },
    {
      key: 4,
      title: "Art Galary",
      techIcon: [<BiLogoHtml5 key={1} />, <BiLogoCss3 key={2} />],
      techName: ["HTML", "CSS", "JavaScript"],
      demoURL: "https://kamalesh-pathy-va.github.io/art-gallery-site/",
      description: "This project was an attempt to re-create a website from design images. Made from plain HTML and CSS",
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
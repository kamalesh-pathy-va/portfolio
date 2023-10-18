import TechItem from './TechItem'

import {SiNextdotjs, SiMysql} from 'react-icons/si'
import { BiLogoAws, BiLogoCPlusPlus, BiLogoCss3, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import {DiLinux} from 'react-icons/di'

const TechStack = () => {
  const techStackData = [
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
      rating: '2',
      level: 'Beginner',
    },
    {
      icon: <BiLogoReact />,
      name: 'React.js',
      rating: '2',
      level: 'Beginner',
    },
    {
      icon: <BiLogoTailwindCss />,
      name: 'Tailwind CSS',
      rating: '3',
      level: 'Intermediate',
    },
    {
      icon: <BiLogoTypescript />,
      name: 'Typescript',
      rating: '2',
      level: 'Beginner',
    },
    {
      icon: <BiLogoNodejs />,
      name: 'Node js',
      rating: '2',
      level: 'Beginner',
    },
    {
      icon: <SiMysql />,
      name: 'MySQL',
      rating: '1',
      level: 'Beginner',
    },
    {
      icon: <BiLogoHtml5 />,
      name: 'HTML',
      rating: '4',
      level: 'Intermediate',
    },
    {
      icon: <BiLogoCss3 />,
      name: 'CSS',
      rating: '4',
      level: 'Intermediate',
    },
    {
      icon: <BiLogoGit />,
      name: 'Git',
      rating: '3',
      level: 'Intermediate',
    },
    {
      icon: <BiLogoJavascript />,
      name: 'Javascript',
      rating: '2',
      level: 'Beginner',
    },
    {
      icon: <BiLogoCPlusPlus />,
      name: 'C++',
      rating: '4',
      level: 'Intermediate',
    },
    {
      icon: <BiLogoPython />,
      name: 'Python',
      rating: '4',
      level: 'Intermediate',
    },
    {
      icon: <DiLinux />,
      name: 'Linux',
      rating: '3',
      level: 'Intermediate',
    },
    {
      icon: <BiLogoAws />,
      name: 'AWS',
      rating: '1',
      level: 'Beginner',
    }
  ];
  return (
    <section className='w-11/12 md:w-3/4 mx-auto mb-24' id='tech'>
      <h2 className='text-3xl font-bold mb-2'>Tech</h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2'>
        {
          techStackData.map((item, index) => <TechItem Icon={item.icon} name={item.name} rating={item.rating} level={item.level} key={index} />)
        }
      </div>
    </section>
  )
}

export default TechStack
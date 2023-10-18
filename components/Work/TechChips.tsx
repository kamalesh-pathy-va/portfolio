interface ChildrenProp {
  name: string;
  icon: any;
}

const TechChips = ({icon, name}: ChildrenProp) => {
  return (
    <div className='text-white text-2xl bg-neutral-700/50 w-fit rounded-md p-1 relative group/techchip'>
      {icon}
      <span className='absolute w-max bg-neutral-900 rounded-full p-2 top-0 left-0 group-hover/techchip:-top-full text-xs uppercase opacity-0 group-hover/techchip:opacity-100 transition-all delay-100 pointer-events-none'>
        {name}
      </span>
    </div>
  )
}

export default TechChips
interface LinkProps {
  link: string
}

export default function Link({link}:LinkProps){

  return(
    <div className="rounded-[10px] flex items-center justify-center align-center h-12 bg-white p-2">
      <a href={link}>{link}</a>
    </div>
  )
}
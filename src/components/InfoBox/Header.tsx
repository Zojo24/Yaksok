
interface HeaderProps {
  order: string
  name: string
  rating: string | number
}

const Header = ({order, name, rating}: HeaderProps) => {
  return(
    <header className="flex items-center justify-center justify-between p-2">
      <div className="rounded size-8 bg-white flex items-center justify-center font-bold">{order}</div>
      <p className="text-lg font-bold">{name}</p>
      <p className="text-lg">{rating}</p>
    </header>
  )
}

export default Header
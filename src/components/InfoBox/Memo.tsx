interface MemoProps{
  id: number
  description: string
  onDelete: (id:number) => void
}


const Memo = ({description, id, onDelete}: MemoProps) => {


  return (
    <div className="rounded-[8px] my-2 flex items-center justify-between h-7 bg-white">
      <p className="text-center flex-grow">{description}</p>
      <button className="mx-2 font-bold" onClick={() => onDelete(id)}>x</button>
    </div>
  )
}

export default Memo
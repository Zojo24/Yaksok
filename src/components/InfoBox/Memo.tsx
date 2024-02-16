interface MemoProps{
  id: number
  description: string
  onDelete: (id:number) => void
}


const Memo = ({description, id, onDelete}: MemoProps) => {


  return (
    <div className="rounded-[8px] mb-2 min-h-7 flex items-center justify-between h-7 bg-white">
      <p className="text-center flex-grow">{description}</p>
      <button className="mx-2 font-bold text-border" onClick={() => onDelete(id)}>X</button>
    </div>
  )
}

export default Memo
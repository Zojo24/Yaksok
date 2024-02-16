import { useRef, type FormEvent } from "react"

interface NewMemoProps{
  onAddMemo: (memo: string) => void

}

const NewMemo = ({onAddMemo}: NewMemoProps) => {
  const memo = useRef<HTMLInputElement>(null)
  
  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const enteredMemo = memo.current!.value

    event.currentTarget.reset()
    onAddMemo(enteredMemo)
  }

  return (
  <form onSubmit={handleSubmit}
  className="rounded-[8px] flex items-center align-center justify-center h-7 bg-white ">
    <input 
    className="flex-1 text-center outline-none m-1" 
    type="text" 
    placeholder="Add memo" 
    ref={memo} 
    maxLength={18}/>
  </form>
  )
}

export default NewMemo
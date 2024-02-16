interface NewMemoProps{
  type: string
  placeholder: string

}

const NewMemo = () => {

  return (
  <form className="rounded-[8px] flex items-center align-center justify-center h-7 bg-white ">
    <input className="flex-1 text-center outline-none m-1" type="text" placeholder="Add memo" />
  </form>
  )
}

export default NewMemo
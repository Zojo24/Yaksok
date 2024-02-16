import { useState } from "react"
import Header from "./Header"
import Link from "./Link"
import NewMemo from "./NewMemo"
import MemoList from "./MemoList"

export interface Memo {
  description: string
  id: number
}

const InfoBox = () => {

  const [memos, setMemos] = useState<Memo[]>([])

  function handleAddMemo() {
    setMemos(prevMemos => {
      const newMemo: Memo = {
        id: Math.random(), //차후에 바꾸기
        description: "청귤소바 맛집!"
      }
      return [...prevMemos, newMemo]
    })
  }

  function handleDeleteMemo(id: number) {
    setMemos(prevMemos => prevMemos.filter((memo) => memo.id !== id))
  }

  return (
    <div className="m-10 grid gap-y-2 text-black w-[300px] min-h-36 p-4 bg-orange rounded">
      <Header order="1" name="오제제 광화문점" rating="4.9" />
      <Link link="https://naver.me/5pUfFLek"/>   
      <NewMemo/>
      <button onClick={handleAddMemo}>Add Memo</button>
      <MemoList memos={memos} onDeleteMemo={handleDeleteMemo}/>
      
    </div>
  )
}

export default InfoBox

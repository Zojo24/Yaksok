import Memo from "./Memo"
import {Memo as MemoProps} from "./InfoBox"

interface MemoListProps {
  memos: MemoProps[]
  onDeleteMemo: (id:number) => void
}

const MemoList = ({memos, onDeleteMemo}: MemoListProps) => {

  return (
    <ul>
      {memos.map((memo) => (
        <li key={memo.id}>
          <Memo id={memo.id} description={memo.description} onDelete={onDeleteMemo}/>
        </li>
      ))}
    </ul>
  )
}

export default MemoList
import Header from "./Header"
import Link from "./Link"
import NewMemo from "./NewMemo"

export default function InfoBox() {

  return (
    <div className="m-10 grid gap-y-2 text-black w-[300px] min-h-36 p-4 bg-orange rounded">
      <Header order="1" name="오제제 광화문점" rating="4.9" />
      <Link link="https://naver.me/5pUfFLek"/>
      <NewMemo/>
    </div>
  )
}

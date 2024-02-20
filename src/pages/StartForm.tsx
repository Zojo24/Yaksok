import { useState } from "react"
import Button from "../components/Button"
import TextInput from "../components/StartForm/textInput"

const StartForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    place: ""
  });

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  
  }
  return(
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex-row justify-center w-[450px] h-[550px] bg-white rounded-[10px] shadow-xl">
        <form onSubmit={handleSubmit} className="m-8 flex-row justify-center">
          <TextInput
            type="date"
            placeholder="날짜를 입력하세요"
            label="생성날짜"
            className="border"
            value={formData.date}
            id="date"
            onInputChange={handleInputChange}
          />
          <TextInput
            type="text"
            placeholder="이름을 입력하세요"
            label="이름"
            className="border"
            value={formData.name}
            id="name"
            onInputChange={handleInputChange}
          />
          <TextInput
            type="search"
            placeholder="장소를 검색하세요"
            label="장소"
            className="border"
            value={formData.place}
            id="place"
            onInputChange={handleInputChange}
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start"> 
              <label className="font-bold mb-[10px] text-darkGray">약속장소</label>
              <div className="text-gray mb-[15px] border border-border w-[300px] h-[140px] p-2 rounded-[5px] shadow text-center focus:outline-none focus:border-stone-500">
                여기에 지도 표시
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button 
              variant="orange"
              size="lg"
              className="w-[302px] text-white"
              type="submit">
                링크 생성하기
            </Button>
          </div>
        </form>
      </div>
    </div>    
  )
}

export default StartForm
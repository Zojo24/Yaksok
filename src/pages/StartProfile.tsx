import Button from "../components/Button"
import Profile from "../components/StartProfile/profile"


const StartProfile = () => {

  return (
    <div className="flex min-h-screen justify-center items-center bg-darkGray">
      <div className="flex-row justify-center w-[700px] h-[350px] bg-white rounded-[10px] shadow-xl">
        <div className="m-8 flex justify-center">
          <div>
            <div className="grid grid-cols-6 gap-4 mb-4">
              {/* First Row */}
              <Profile />
              <Profile />
              <Profile />
              <Profile />
              <Profile />
              <Profile />
            </div>
            
            <div className="grid grid-cols-6 gap-4">
              {/* Second Row */}
              <Profile />
              <Profile />
              <Profile />
              <Profile />
              <Profile />
              <Profile />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-8 mx-8 px-2">
          <p className="font-bold text-lg text-darkGray ml-2">8 / 12</p>
          <p className="font-bold text-s text-darkGray">참여인원</p>
          <Button variant="orange" size="lg" className="w-[400px] text-white px-20 ml-20">
            추가하기
          </Button>
        </div>
      </div>
      
    </div>
  )
}

export default StartProfile
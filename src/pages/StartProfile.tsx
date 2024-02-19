import Button from "../components/Button";
import Profile from "../components/StartProfile/Profile";
import MockProfiles from "../mocks/MockProfiles";

const StartProfile = () => {
  const numberOfProfiles = MockProfiles.length;
  const maxProfiles = 12;
  const emptySpaces = maxProfiles - numberOfProfiles;
  const emptyProfiles = Array.from({ length: emptySpaces }).fill(null);
  return (
    <div className="flex min-h-screen justify-center items-center bg-darkGray">
      <div className="flex-row justify-center w-[700px] h-[350px] bg-white rounded-[10px] shadow-xl">
        <div className="m-8 flex justify-center">
          <div>
            <div className="grid grid-cols-6 gap-4 mb-4">
               {/* 생성된 프로필 map */}
              {MockProfiles.map((profile) => (
                <Profile
                  key={profile.id}
                  id={profile.id} 
                  name={profile.name}
                  bgColor={profile.bgColor}
                />
              ))}
               {/* 빈 프로필 공간 */}
              {emptyProfiles.map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="flex items-center justify-center w-[90px] h-[90px] rounded-[7px] bg-border"
                >
                  <p className="text-stone-500"></p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-8 mx-8 px-2">
          <p className="font-bold text-lg text-darkGray ml-2">{numberOfProfiles} / {maxProfiles}</p>
          <p className="font-bold text-s text-darkGray">참여인원</p>
          <Button
            variant="orange"
            size="lg"
            className="w-[400px] text-white px-20 ml-20"
          >
            추가하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StartProfile;

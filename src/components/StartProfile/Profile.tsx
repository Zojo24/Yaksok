import { ProfileType } from "./ProfileType"

// interface ProfileType {
//   bgColor: string,
//   id: string,
//   name: string
// }
const Profile = ({ id, name, bgColor }: ProfileType) => {
  const profileClass = `flex size-[90px] justify-center items-center rounded-[7px] bg-${bgColor}`;

  return (
    <div key={id} className={profileClass}>
      <p className="text-creme font-bold">{name}</p>
    </div>
  );
};

export default Profile;


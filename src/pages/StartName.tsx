import { useState } from "react";
import Button from "../components/Button";

const StartName = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col justify-center bg-white p-20 rounded-[5px] shadow-md space-y-4">
        <input
          type="text"
          placeholder="이름을 입력하세요"
          className="border border-border p-2 rounded-[5px] shadow text-center focus:outline-none focus:shadow-none focus:border-orange-100"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input type="text" value={`이름: ${name}`} className="font-bold" />
        <Button variant="orange" size="lg" className="px-20" disabled={!name}>
          입장하기
        </Button>
      </div>
    </div>
  );
};
export default StartName;

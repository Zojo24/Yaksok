interface TextInputProps{
  id: string,
  label: string,
  type: string,
  placeholder: string,
  className: string,
  value: string,
  onInputChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({ label, type, placeholder, value, className, id, onInputChange}: TextInputProps) => {

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-start"> 
        <label className="font-bold mb-[5px] text-darkGray" htmlFor={id}>{label}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          className={`${className} mb-[10px] border border-border w-[300px] p-2 rounded-[5px] shadow text-center focus:outline-none focus:border-stone-500`}
        />
      </div>
    </div>
  );
};

export default TextInput;
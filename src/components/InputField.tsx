import type { InputFieldProps } from '../types';

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: InputFieldProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-2xl" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={`Enter ${label.toLowerCase()}`}
      className="p-5 text-xl px-4 border rounded-lg bg-white text-black"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;

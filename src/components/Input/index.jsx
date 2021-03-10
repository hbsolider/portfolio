import './style.scss';
export const Input = ({ placeholder, onFocus, onBlur }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;

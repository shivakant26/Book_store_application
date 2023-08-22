import React from "react";

const InputField = ({
  id,
  type,
  register,
  placeholder,
  inputMode,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        id={id}
        inputMode={type === "tel" ? "numeric" : undefined}
        placeholder={placeholder}
        {...register}
      />
      <p className="error">{error?.message}</p>
    </div>
  );
};

export default InputField;

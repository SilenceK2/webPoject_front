import { FC, ChangeEvent } from "react";
import { StyledInput, StyledInputContainer, IconContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

interface Props {
  placeholder?: string;
  type?: any;
  name?: string;
  onChange?: any;
  value?: string;
  setValue?: ((value: string) => void | undefined) | undefined;
  onClick?: () => void;
  disabled?: boolean;
  color?: string | undefined;
}

const SignupInput: FC<Props> = ({
  type = "",
  placeholder,
  name,
  disabled,
  value,
  setValue,
  onClick,
  color,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  useEffect(() => {
    if (type) {
      type = "text";
    }
  }, []);

  return (
    <StyledInputContainer>
      <IconContainer>
        {type === "loginInput" && (
          <div>{/* <FontAwesomeIcon icon={faUser} /> */}</div>
        )}
      </IconContainer>
      <StyledInput
        type={type === "password" ? "password" : type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
        disabled={disabled}
        color={color}
        autoComplete="off"
      />
      {type === "verify" && (
        <>
          <button onClick={onClick} disabled={disabled}>
            중복확인
          </button>
        </>
      )}
      {type === "verifyloading" && (
        <button onClick={onClick} color={color} disabled={disabled}>
          ..
        </button>
      )}
    </StyledInputContainer>
  );
};

export default SignupInput;

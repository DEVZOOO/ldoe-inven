import { faEye, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

/**
 * input
 */
export const Input = styled.input`
  // padding: var(--gap-xs);
  padding: var(--gap-xs) 0;
  color: var(--foreground);
  background-color: var(--background);
  // border: 1px solid var(--c-gray);
  // border-radius: var(--radius-s);
`;

/**
 * 검색영역 input
 */
export const SearchInput = styled.input`
  padding: var(--gap-xs);
  color: var(--foreground);
  background-color: var(--background);
  border: 1px solid var(--c-gray);
  border-radius: var(--radius-s);
`;

/**
 * input with suffix button
 */
function InputButtonWrap({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex items-center px-xs border border-gray rounded-[var(--radius-s)]">
      {children}
    </div>
  );
}

/**
 * input 텍스트
 */
export function InputText({ children }: { children?: React.ReactNode }) {
  return <InputButtonWrap>{children}</InputButtonWrap>;
}

/**
 * input 비밀번호
 */
export function InputPassword({
  icon,
  children,
}: {
  icon?: IconDefinition;
  children?: React.ReactNode;
}) {
  return (
    <InputButtonWrap>
      {children}
      {icon && (
        <button type="button" className="w-[20px]">
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </button>
      )}
    </InputButtonWrap>
  );
}

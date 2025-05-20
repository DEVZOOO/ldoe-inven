import styled from "styled-components";

type CtgrySectionType = {
  title?: string;
  cls?: string;
  children?: React.ReactNode;
};

export default function CtgrySection({
  title,
  cls,
  children,
}: CtgrySectionType) {
  return (
    <section className={`mt-m border ${cls}`}>
      <div className="flex justify-between text-[var(--background)] bg-[var(--foreground)]">
        {title && <Title>{title}</Title>}
        <MoreBtn type="button">더보기</MoreBtn>
      </div>
      <div className="p-xs">{children}</div>
    </section>
  );
}

const Title = styled.div`
  padding: var(--gap-xs);
`;

const MoreBtn = styled.button`
  margin: var(--gap-xs) 4px;
  padding: 2px 4px;
  color: #31cbbe;
  background-color: var(--c-black);
  border: 1px solid #31cbbe;
  border-radius: var(--radius-s);
  font-size: 0.8em;
`;

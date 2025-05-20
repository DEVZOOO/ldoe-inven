type CtgrySectionType = {
  title?: string;
  children?: React.ReactNode;
};

export default function CtgrySection({ title, children }: CtgrySectionType) {
  return (
    <section>
      {title && <h1>{title}</h1>}
      <div>{children}</div>
    </section>
  );
}

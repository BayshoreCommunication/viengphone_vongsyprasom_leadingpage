import { KEYWORD } from "./content";

/** Renders text with every occurrence of the target keyword in bold, as in the source doc. */
export function Keyword({ text }: { text: string }) {
  const parts = text.split(KEYWORD);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <strong className="font-bold">{KEYWORD}</strong>}
        </span>
      ))}
    </>
  );
}

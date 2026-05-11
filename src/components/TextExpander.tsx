"use client";
import { useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function TextExpander({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = Array.isArray(children)
    ? children.join(" ")
    : typeof children === "string"
    ? children
    : String(children); 

  const displayText = isExpanded
    ? text
    : text.split(" ").slice(0, 8).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;

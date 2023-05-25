import React from "react";

export const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  color,
  borderRadius,
  FontSize,
  cursor
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || "black",
    borderRadius,
    FontSize,
    textAlign: "center",
    cursor: cursor || null,
    TextDecoderation: "none",
  };
  return <div style={style}>{children}</div>;
};

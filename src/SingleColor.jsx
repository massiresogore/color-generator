import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipBord 🤗");
      } catch (error) {}
    } else {
      toast.error("navigator not support clipBoard");
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      SingleColor
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
};

export default SingleColor;

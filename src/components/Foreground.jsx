import React, { useRef, useState } from "react";
import Card from "./Card.jsx";


function Foreground() {

    const ref = useRef(null);

  const data = [
    {
      desc: "This is my file so do not open this file thank you and welcome.",
      filesize: "20 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is my file so do not open this file thank you and welcome.",
      filesize: "10 MB",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is my file so do not open this file thank you and welcome.",
      filesize: "50 MB",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "purple" },
    },
  ];

  return (
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index)=>(
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
  );
}

export default Foreground;

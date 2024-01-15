import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      title: "My Life & Work",
      description: `Chronicling the rise and success of one of the greatest American entrepreneur, this book unravels it all.`,
      filepath: "src/assets/659fb76495158-my-life-and-work.pdf",
      filename: "My-Life-and-Work.pdf",
      filesize: "2.0mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-yellow-500",
      },
    },
    {
      title: "Win any argument",
      description: `Sound reasoning is the basis of winning an argument. Logical fallacies undermine arguments.`,
      filepath: "src/assets/651e0046e98f5-how-to-win-every-argument-.pdf",
      filename: "how-to-win-any-argument.pdf",
      filesize: "2.5mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-600",
      },
    },
    {
      title: "Business Intelligence",
      description: `Business Intelligence The strategy and the planning, This chapter will provide an integrated understanding of business intelligence.`,
      filepath: "",
      filename: "",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-sky-600",
      },
    },
    {
      title: "Psychology of Eating",
      description: `Obesity and overweight are on the increase, this resource provides tips on diet and healthy food consumption.`,
      filepath: "src/assets/63d984db7caa3-the-psychology-of-eating.pdf",
      filename: "Psychology-of-Eating.pdf",
      filesize: "1.2mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-sky-600/80",
      },
    },
    {
      title: "Rules of Work",
      description: `The Rules of Work is about creating that type of course, you’ve got to be able to do the job in the first place. But a lot of people can do that. What makes you stand out? `,
      filepath: "",
      filename: "",
      filesize: "0.6mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-sky-600",
      },
    },
  ];

  return (
    <>
      <div
        ref={ref}
        className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-10"
      >
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;

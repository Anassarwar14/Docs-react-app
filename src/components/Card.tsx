import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { CgUnavailable } from "react-icons/cg";
import { motion } from "framer-motion";

function Card({ data, reference }: any) {
  //destructuring instead of props
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 10 }}
        className="relative flex-shrink-0 w-60 h-72 bg-zinc-100/90 shadow-2xl backdrop-blur rounded-[40px] px-8 py-10"
      >
        <div className="flex items-center gap-2">
          <FaRegFileAlt />
          <h3 className="font-semibold">{data.title}</h3>
        </div>
        <p className="text-sm font-semibold leading-tight mt-4">
          {data.description}
        </p>
        <div className="footer absolute bottom-0 left-0 w-full rounded-b-[40px] overflow-hidden text-zinc-200">
          <div className="flex items-center justify-between mb-3 px-8 py-2 text-zinc-800">
            <h6 className="text-sm font-semibold">{data.filesize}</h6>
            <span className="w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center ">
              {data.close ? (
                <CgUnavailable size="0.8em" color="#222" />
              ) : (
                <button>
                  <a href={data.filepath} download={data.filename}>
                    <LuDownload size="0.8em" color="#222" />
                  </a>
                </button>
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full ${data.tag.tagColor} py-4 flex items-center justify-center`}
            >
              <a href={data.filepath} download={data.filename}>
                <h3 className="text-sm font-semibold text-zinc-200 cursor-pointer">
                  {data.tag.tagTitle}
                </h3>
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;

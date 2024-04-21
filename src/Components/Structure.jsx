import { NavLink, Outlet } from "react-router-dom";

const Structure = () => {
  return (
    <div className="p-4 flex flex-col gap-4 bg-primaryBg h-full w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-primaryText text-3xl md:text-[3rem] font-semibold">
          Text Analyzer
        </h1>
        <p className="text-secondaryText text-md md:text-[1.5rem] ">
          Text Analyzer is a simple free online tool for SEO web content
          analysis that helps you find most frequent phrases and words, number
          of characters, words, sentences and paragraphs, and estimated read and
          speak time of your content.
        </p>
      </div>
      <div className="w-full max-w-[35rem] rounded-lg p-1 bg-lightBg border-borderColor border-[2px] flex items-center justify-between mb-4">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "active text-primaryText w-[50%] block text-center shadow-lg bg-white rounded-lg py-2 font-semibold"
                : "font-semibold py-2 text-tabText w-[50%] block text-center"
          }
        >
          Word Input
        </NavLink>
        <NavLink
          to={"/paragraph"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "active text-primaryText w-[50%] block text-center shadow-lg bg-white rounded-lg py-2 font-semibold"
                : "font-semibold py-2 text-tabText w-[50%] block text-center"
          }
        >
          Paragraph
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Structure;

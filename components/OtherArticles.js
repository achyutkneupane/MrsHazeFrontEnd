import Link from "next/link";
import moment from "moment";
import Article from "./Article";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const OtherArticles = ({ others }) => (
  <div className="flex flex-col items-center w-full gap-8 py-8">
    <h3 className="w-1/2 text-3xl text-center uppercase md:w-1/3 lg:w-1/6 h3title">
      More Articles
    </h3>
    <div className="flex flex-col justify-center w-full md:flex-row md:flex-wrap md:w-3/4 gap-4">
      <div className="grid w-full px-8 md:px-0">
        <ResponsiveMasonry columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 3 }}>
          <Masonry>
            {others.map((post, index) => (
              <div className="p-2" key={index}>
                <Article post={post} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  </div>
);
export default OtherArticles;

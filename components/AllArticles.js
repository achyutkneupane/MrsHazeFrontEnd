import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Article from "./Article";

const AllArticles = ({ articles }) => {
  return (
    <div className="w-screen px-4 py-4 lg:px-8 xl:px-12">
      <div className="flex flex-col items-center justify-center gap-8 py-12">
        <div className="flex flex-row w-full px-4 text-justify text-black">
          <div className="grid w-full">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 3 }}
            >
              <Masonry>
                {articles.map((post, index) => (
                  <div
                    className="p-2"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    key={index}
                  >
                    <Article post={post} />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArticles;

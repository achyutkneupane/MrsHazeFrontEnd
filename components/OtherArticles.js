import Link from "next/link";
import moment from "moment";

const OtherArticles = ({ others }) => (
  <div className="flex flex-col items-center w-full gap-8 py-8">
    <h3 className="w-1/2 text-3xl text-center uppercase md:w-1/3 lg:w-1/6 h3title">
      More Articles
    </h3>
    <div className="flex flex-col justify-center w-full md:flex-row md:flex-wrap md:w-2/3 gap-4">
      {others.map((post, index) => (
        <div className="flex justify-center w-full py-8 md:w-1/3 bg-white rounded" key={index}>
          <div className="flex flex-col items-center justify-start w-full h-full gap-2 text-center">
            <img
              src={post.medium_cover}
              alt={post.title + " - Mrs. Haze"}
              loading="lazy"
              className="object-cover object-center max-h-96"
            />
            <h5 className="text-xl font-bold uppercase">
              <Link href={"/article/" + post.slug}>
                <a className="text-turq">
                    {post.title}
                </a>
              </Link>
            </h5>
            <div className="flex flex-row justify-center gap-2">
              <span>
                <Link
                  href={"/category/" + post.category.slug}
                >
                    <a
                  className="text-gray-700">{post.category.title}</a>
                </Link>
              </span>
              <span className="text-black">|</span>
              <span className="text-gray-700">
                {moment(post.published_at).fromNow()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default OtherArticles;

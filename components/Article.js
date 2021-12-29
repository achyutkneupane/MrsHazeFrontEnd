import moment from "moment";
import excerptHtml from "excerpt-html";
import Link from "next/link";

const Article = ({ post }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 lg:p-8 rounded-xl">
      <img
        className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
        loading="lazy"
        src={post.medium_cover}
        alt={post.title + " - Mrs. Haze"}
        title={post.title + " - Mrs. Haze"}
      />
      <Link href={`/article/${encodeURIComponent(post.slug)}`}>
        <a className="mx-auto mb-2 text-2xl font-semibold leading-none tracking-tighter text-center text-black title-font">
          {post.title}
        </a>
      </Link>
      <div className="flex flex-row justify-center gap-2 my-4 font-bold text-turq">
        <div>
          <Link href={`/category/${encodeURIComponent(post.category.slug)}`}>
            <a>{post.category.title}</a>
          </Link>
        </div>
        <div className="text-black"> | </div>
        <div>{moment(post.published_at).fromNow()}</div>
      </div>
      <p className="mx-auto text-base font-medium leading-relaxed text-gray-500 ">
        {excerptHtml(post.content, { pruneLength: 300 })}
      </p>
      <Link href={`/article/${encodeURIComponent(post.slug)}`}>
        <a
          className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-black "
          title="read more"
        >
          Read More »
        </a>
      </Link>
    </div>
  );
};

export default Article;

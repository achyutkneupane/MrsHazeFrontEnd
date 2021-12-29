import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";

export const getStaticPaths = async (context) => {
  console.log(context);
  const res = await fetch("https://mrshaze.me/api/articles");
  const articles = await res.json();
  const paths = articles?.map((article) => {
    return {
      params: {
        slug: article.slug.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch("https://mrshaze.me/api/article/" + slug);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

const slug = ({ article }) => {
  return (
    <div className="bodyView w-screen h-screen">
      <Head>
        <title>{article.title + " - Mrs. Haze"}</title>
        <meta
          name="title"
          content={article.title + " - Mrs. Haze"}
        />
        <meta name="description" content={article.description} />
        <meta
          name="keywords"
          content={
            "Subani Moktan,Mrs. Haze,Mrs. Haze Writes," +
            article.title +
            "," +
            category.title
          }
        />
        <meta
          property="article:published_time"
          content={moment(article.published_at).toISOString()}
        />
        <meta property="article:section" content="article" />
        <meta
          property="article:author"
          content="https://www.facebook.com/subani"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/moktan.subani"
        />
        <meta property="fb:app_id" content="931301841077172" />
        <meta property="fb:pages" content="333706163397393" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={global.location.href} />
        <meta
          property="og:title"
          content={article.title + " - Mrs. Haze"}
        />
        <meta
          property="og:description"
          content={article.description}
        />
        <meta property="og:image" content={article.cover} />
        <meta property="og:site_name" content="Mrs. Haze" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={global.location.href} />
        <meta
          name="twitter:title"
          content={article.title + " - Mrs. Haze"}
        />
        <meta
          name="twitter:description"
          content={article.description}
        />
        <meta name="twitter:image" content={article.cover} />
        <meta name="twitter:site" content="@moktansubani" />
      </Head>
      {article.slug}
    </div>
  );
};
export default slug;

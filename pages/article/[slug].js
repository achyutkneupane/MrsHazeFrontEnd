import moment from "moment";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import Footer from "../../components/Footer";
import OtherArticles from "../../components/OtherArticles";
import Header from "../../components/Header";

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

  const articleRes = await fetch("https://mrshaze.me/api/article/" + slug);
  const article = await articleRes.json();

  const otherRes = await fetch("https://mrshaze.me/api/articles/without/"+slug);
  const others = await otherRes.json();

  const content = article.content.split("\n");
  return {
    props: {
      article,
      others,
      content
    },
  };
};

const slug = ({ article,others,content }) => {
  return (
    <div className="bodyView">
      <Head>
        <title>{article.title + " - Mrs. Haze"}</title>
        <meta name="title" content={article.title + " - Mrs. Haze"} />
        <meta name="description" content={article.description} />
        <meta
          name="keywords"
          content={
            "Subani Moktan,Mrs. Haze,Mrs. Haze Writes," +
            article.title +
            "," +
            article.category.title
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
        <meta property="og:url" content={global.location?.href} />
        <meta property="og:title" content={article.title + " - Mrs. Haze"} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.cover} />
        <meta property="og:site_name" content="Mrs. Haze" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={global.location?.href} />
        <meta name="twitter:title" content={article.title + " - Mrs. Haze"} />
        <meta name="twitter:description" content={article.description} />
        <meta name="twitter:image" content={article.cover} />
        <meta name="twitter:site" content="@moktansubani" />
      </Head>
      <Header />
      <div>
        <div className="flex flex-col gap-4 py-12">
          <div className="flex flex-row justify-center px-8">
            <img
              src={article.big_cover}
              alt="Chocolate"
              className=" border-4 border-gray-100"
            />
          </div>
          <article
            className="flex flex-col gap-4 text-justify mx-8 text-gray-750 sm:mx-16 md:mx-24 lg:mx-36 bg-white p-8 rounded-xl shadow shadow-black"
            id="article"
          >
            <div className="justify-center md:flex">
              <div className="md:float-left mx-4 py-4 flex flex-col items-center justify-center w-full">
                <div className="text-4xl font-bold uppercase text-turq text-center">
                  {article.title}
                </div>
                <div className="text-lg text-gray-600">
                  written <b>{moment(article.published_at).fromNow()}</b>
                </div>
              </div>
              <div className="first-letter:text-7xl first-letter:float-left first-letter:pr-4 first-letter:text-black first-letter:font-bold my-auto">
                {ReactHtmlParser(content[0])}
              </div>
            </div>
            {content?.map((section,index) => {
                if(index!=0)
                return (
                    <div key={index}>
                        {ReactHtmlParser(section)}
                    </div>
                )
            })}
          </article>
        </div>
      </div>
      <OtherArticles others={others} />
      <Footer />
    </div>
  );
};
export default slug;

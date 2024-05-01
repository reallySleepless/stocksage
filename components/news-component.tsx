import { useEffect, useState } from "react";
import { getQuotes } from "../api/getQuotes";

const NewsComponent = () => {
  // const [isNewsFetched, setIsNewsFetched] = useState(false);
  // const [news, setNews] = useState<
  //   { title: string; description: string; url: string }[] | null
  // >(null);
  // const [error, setError] = useState<any>(null);

  // const fetchNews = async () => {
  //   try {
  //     // Replace "PUT_SOME_NEWS_API_URL_HERE" with the actual API URL
  //     const response = await fetch("PUT_SOME_NEWS_API_URL_HERE");
  //     const data = await response.json();
  //     setNews(data);
  //     setIsNewsFetched(true);
  //   } catch (error) {
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, []);

  const [quotes, setQuotes] = useState<any>(null);

  useEffect(() => {
    const getBussinessQuotes = async () => {
      const res = await getQuotes();
      console.log("response:", res);
      setQuotes(res[0]);
    };
    getBussinessQuotes();
  }, []);

  console.log("quotes:", quotes);
  return (
    <div className="w-[35.563rem] flex flex-col items-start justify-start pt-[1.313rem] pb-[0rem] pr-[0.688rem] pl-[0rem] box-border max-w-full">
      <div className="self-stretch rounded-[14px] bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[1.063rem] pb-[0rem] pr-[0.938rem] pl-[0.813rem] box-border gap-[1.438rem] max-w-full z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.313rem] max-w-full">
          <div className="w-[30.688rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem] box-border max-w-full text-[1.375rem]">
            <h2 className="m-0 flex-1 relative text-inherit tracking-[0.8px] leading-[1.75rem] font-normal font-inherit inline-block max-w-full mq450:text-[1.125rem] mq450:leading-[1.375rem]">
              Today&apos;s Quote
            </h2>
          </div>
          <>
            {!quotes ? (
              <div className="w-[30.688rem] flex flex-col items-start justify-start gap-[0.313rem] max-w-full">
                <h3 className="m-0 flex-1 relative text-inherit tracking-[0.8px] leading-[1.75rem] font-normal font-inherit inline-block max-w-full mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                  Loading...
                </h3>
              </div>
            ) : (
              <div className="w-[30.688rem] flex flex-col items-start justify-start gap-[0.313rem] max-w-full">
                <h3 className="m-0 flex-1 relative text-inherit tracking-[0.8px] leading-[1.75rem] font-normal font-inherit inline-block max-w-full mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                  {quotes?.quote}
                </h3>
                <p> - {quotes.author}</p>
              </div>
            )}
            <div className="self-stretch pt-4 h-[0rem] flex flex-row items-start justify-start py-[0rem] pr-[0.188rem] box-border max-w-full">
              <div className="h-[0.063rem] flex-1 relative box-border max-w-full border-t-[1px] border-solid border-royalblue-100" />
            </div>
          </>
        </div>

        <div className="w-[20.969rem] h-[-5.25rem] flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border max-w-full">
          <img
            className="h-[0rem] flex-1 relative max-w-full overflow-hidden"
            alt=""
            src="/divider-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;

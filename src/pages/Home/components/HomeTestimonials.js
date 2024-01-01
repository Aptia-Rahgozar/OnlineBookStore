import avatar01 from "../../../assets/images/avatar01.jpg";
import avatar02 from "../../../assets/images/avatar02.png";
import avatar03 from "../../../assets/images/avatar03.jpg";
import avatar04 from "../../../assets/images/avatar04.jpg";

export const HomeTestimonials = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Our Users' Opinions
      </h1>
      <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-color02 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Very user-friendly experience
            </h3>
            <p className="my-4 font-light">
              "If you care for your time, this is the best place to look for
              your books."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={avatar01} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>John Doe</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Student at Random College
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-color02 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              A wide variety of topics
            </h3>
            <p className="my-4 font-light">
              "You can easily find different books by different authors in
              different genres."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={avatar02} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jack Brown</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Teacher at Random School
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-color02 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Great Customer Service
            </h3>
            <p className="my-4 font-light">
              "You can be sure that your purchase will always be supported
              here."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={avatar03} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Paul White</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Journalist at Random Magazine
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-color02 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Efficient Accountability
            </h3>
            <p className="my-4 font-light">
              "You can talk to the operators at any time during the day."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={avatar04} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Tom Blue</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Editor at Random Paper
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

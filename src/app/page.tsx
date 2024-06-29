import Navbar from "@/components/Navbar";
import clsx from "clsx";
import Background from "public/background.svg";
import Chrome from "public/chrome.svg";
import Edge from "public/edge.svg";

export default function Home() {
  return (
    <main className="flex relative h-[2000px]">
      {/* Image background */}
      <div className="absolute -z-10 w-full h-screen">
        <Background
          className="w-full h-full object-cover"
          preserveAspectRatio="xMinYMin slice" // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio
        />
      </div>

      <Navbar />

      {/* Main content */}
      <div className="flex flex-col w-full">
        {/* Spacer */}
        <div className="h-[--navbar-height] w-full"></div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 w-full text-[#D8EAFF] p-8">
          {/* Left */}
          <div className="flex flex-col gap-4 w-full md:w-[60%] pr-12">
            <h1 className="text-4xl text-[#8190F5] font-medium">
              Access your bookmarks faster with{" "}
              <span className="text-[#FFE88E]">memorable keywords</span>
            </h1>
            <div className="hidden md:flex gap-4 items-center">
              <button className="bg-[#FFDE59] py-2 px-8 rounded-lg text-black font-semibold">
                Try It Free
              </button>
              <div className="flex flex-col gap-1 text-xs">
                <div>Generous Freemium plan.</div>
                <div>No credit card required.</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 w-full md:w-[40%]">
            <h2 className="text-xl">
              Struggling to find the right bookmarks amid cluttered menus?
            </h2>
            <p className="font-light">
              Supercharge your bookmarking game by assigning memorable keywords
              to your links. Simply type these keywords into your browser&apos;s
              address bar to quickly access your bookmarks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="md:hidden bg-[#FFDE59] py-2 px-8 rounded-lg text-black font-semibold">
                Try It Free
              </button>
              <div
                className={clsx(
                  "flex items-center gap-2 bg-[#1B2634] w-fit py-2 px-4 rounded-xl",
                  "border-[2px] border-[#3C4D64]",
                )}
              >
                <p>Compatible with</p>
                <Chrome />
                <Edge />
              </div>
            </div>

            <p className="md:hidden">
              Generous Freemium plan. No credit card required.
            </p>
          </div>
        </div>

        {/* Demo Image */}
        <div></div>
      </div>
    </main>
  );
}

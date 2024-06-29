import Logo from "public/logo.svg";
import clsx from "clsx";
import Menu from "public/menu.svg";

export default function Navbar() {
  return (
    <div
      className={clsx(
        "fixed top-0 w-full h-[--navbar-height]",
        "flex items-center justify-between px-4 py-2",
      )}
    >
      {/* Logo */}
      <button className="flex h-full">
        <Logo className="h-full w-auto" />
      </button>

      {/* Right side on big screen */}
      <div className="md:flex hidden gap-8 h-full items-center">
        <button>About Us</button>
        <button>Pricing</button>
        <button>Guide</button>
        <div className="h-full w-[2px] bg-[#749BB0]"></div>
        <button>Sign In</button>
        <button className="bg-[#FFDE59] p-2 rounded-lg text-black font-medium">
          Try for free
        </button>
      </div>

      {/* Right side on small screen */}
      <div className="flex md:hidden gap-4 h-full items-center">
        <button className="bg-[#FFDE59] p-2 rounded-lg text-black text-sm font-medium">
          Try for free
        </button>
        <Menu />
      </div>
    </div>
  );
}

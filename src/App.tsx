// Imported icons/logos
import figglyLogo from "./assets/icon48.svg"
import figglyIllustration1 from "./assets/Figgly-illustration.svg"
import figgly2ndSectionImg from "./assets/Figgly-2nd-section-img.svg"
import figgly3rdSectionImg from "./assets/Figgly-3rd-section-img.svg"
import figgly4thSectionImg from "./assets/Figgly-4th-section-img.svg"



function App() {

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="fixed w-full h-[5rem] border-b border-[#e0e0e0] xl:px-[15rem] px-4 py-[1rem] flex flex-row justify-between bg-white">
        <div className="flex flex-row md:gap-14 gap-4 items-center ">
          <img src={figglyLogo} alt="Figgly-logo" className="bg-amber-500 h-[3rem] w-[3rem]  rounded-2xl" />
          <a className="cursor-pointer" href="#what">
          <span className="hidden md:inline">What is it?</span>
          <span className="inline md:hidden">What?</span>
          </a>
          <a className="cursor-pointer" href="#how">
            <span className="hidden md:inline">How does it work?</span>
            <span className="inline md:hidden">How?</span>
          </a>
        </div>
        <button className="bg-[#4169e1] rounded-lg text-[1rem] text-white px-2 cursor-pointer">
          Get started
        </button>
      </div>

      {/* Main */}
      {/* First section */}
      <div className="w-full xl:px-[15rem] px-4 flex flex-col mt-[8rem] gap-4 mb-[6.25rem]">
        <h1 className="text-[6.25rem] text-[#333333]">Figgly</h1>
        <p className="xl:w-[56.25rem] w-full">Overlay your Figma frames on the website you’re coding. <strong> Inspect elements, copy their styles, paste them into your code, and compare your results with the original design — all in one tab.</strong>
          <br />
          <br />No more switching back and forth between your localhost and Figma.
        </p>
        <img src={figglyIllustration1} alt="Figgly-illustration" className="mt-4" />
      </div>
      {/* 2nd section */}
      <div className="w-full py-[12.5rem] bg-[#FEF0D9] flex xl:flex-row flex-col gap-6 xl:px-[15rem] px-4" id="what">
        <div className="flex flex-col justify-between">
          <h2 className="text-[3.75rem]">Figma on the Left, Code on the Right… <br />Who Needs That?</h2>
          <p>
            Figgly is a Chrome extension that lets you peek at Figma designs right on top of any website — no awkward tab-switching or endless squinting required. Now you can instantly spot if something’s “off” in the live version compared to the original design. <br />
            Want to overlay Figma on your localhost while coding? Easy. Inspect Figma elements with a single click, copy styles straight into your code, and check in real-time how closely your implementation matches the designer’s vision.
            <br /><br />
            With <span className="text-[#4169E1] font-bold">Figgly</span>, your final product won’t just look good — it’ll be pixel-perfect, stress-free, and maybe even a little magical!
          </p>
        </div>
        <img src={figgly2ndSectionImg} alt="No need to switch tabs" />
      </div>
      {/* 3rd section */}
      <div className="w-full py-[12.5rem] bg-[#FFCEDC] flex xl:flex-row flex-col gap-6 xl:px-[15rem] px-4">
        <img src={figgly3rdSectionImg} alt="Figgly the loving child of Figma and Chrome" />
        <div className="flex flex-col justify-between">
          <h2 className="text-[3.75rem]">Where Figma Meets Your Browser <br />
            (In actual code, finally!)</h2>
          <p>
            Ever wished your Figma designs could just… turn into code and jump straight into your browser? Well, wish granted. Figgly takes your Figma frames and magically transforms them into code before overlaying them on your browser.
            No more poking around Figma’s interface like it’s a puzzle just to figure out font sizes, spacing, or colors. With Figgly, all the juicy details are already hanging out in your browser — your second home as a developer. Inspect, tweak, or nerd out on those elements without ever leaving your comfy coding spot. <br /><br />

            It’s like Figma and your dev tools had a little love child… and it’s called <span className="text-[#4169E1] font-bold">Figgly</span>.
          </p>
        </div>
      </div>
      {/* 4th section */}
      <div className="w-full py-[5rem] bg-[#ECF0FC] flex xl:flex-row flex-col gap-6 xl:px-[15rem] px-4 items-center" id="how">
        <div className="flex flex-col gap-4">
          <h2 className="text-[3.75rem]">So Easy, It Feels <span className="text-[#4169E1] font-bold">Figgly!</span></h2>
          <div className="flex flex-col gap-1">
            <li>
              Pick a Figma frame — it’s like picking your favorite snack!
            </li>
            <li>
              Drop it on any website… or your live code preview. Figgly handles the viewport width automatically, so everything stays responsive. Magic, right?
            </li>
            <li>
              Hover over a Figma element to see its type. Click it, and boom — all the specs appear.
            </li>
            <li>
              Copy the specs straight into your code. No more guesswork, no more eyeball gymnastics.
            </li>
            <li>
              Compare your code with the original design and watch perfection happen ♥
            </li>
          </div>
        </div>
        <img src={figgly4thSectionImg} alt="Easy like Figgly" />
      </div>
      {/* 5th section */}
      <div className="flex flex-col gap-[32px] justify-center items-center h-[30rem] w-full">
        <h2>Try Figgly!</h2>
        <button className="bg-[#4169e1] rounded-lg text-[1.5rem] text-white px-2 cursor-pointer w-[15rem] h-[4rem]">
          Get started
        </button>
      </div>
      {/* Footer */}
      <div className="w-full flex flex-row items-center justify-center bg-[#303238] py-[1.25rem]">
        <h3 className="text-white">
          © 2025 Figgly. All rights reserved.
        </h3>
      </div>
    </div>
  )
}

export default App

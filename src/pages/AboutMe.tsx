import { AnimatedPinDemo } from "@/components/LocationPin"

export const AboutMePage = () => {
    return <>
        <div className="bg-[url(/bg.png)] bg-center h-[100vh] w-full flex justify-between items-center">
            {/* left */}
            <div className="h-full w-[50%] flex justify-center items-start flex-col pl-[3rem] pr-[1rem]">
                <h2 className="text-white font-light text-[3rem] mb-[1rem]">About Me</h2>
                <p className="text-white">
                    Hey there! I’m Nishal Shah — part-time code whisperer, full-time tech nerd. <br />
                    <br />
                    Started coding in my first year of college and haven’t looked back (or slept) since. I love breaking things just so I can figure out how to fix them better. <br />
                    Currently leveling up with a Master’s in Data Science after wrapping up my BCA.
                    <br />
                    <br />
                    Machine learning? Big yes. Football? Even bigger yes. I'm always chasing cool projects, weird bugs, and that sweet "it finally works!" moment.
                    Still learning, still building, still not stopping. Let’s make something awesome!
                </p>
            </div>
            {/* right */}
            <div className="h-full w-[50%] flex justify-center items-center">
                <AnimatedPinDemo />
            </div>
        </div>
    </>
}




import { FuzzyText } from "@/components/ui/fuzzy-text"
import { FloatingDockDemo } from "../components/Floating-Dock"
import { motion } from "motion/react"

export const MainPage = () => {
    return <>
        <div className="relative h-[100vh] w-[100%] bg-[url(/bg.png)] bg-center overflow-hidden flex flex-col items-center justify-center">
            <motion.div className="absolute top-5 left-5">
                <p className="text-white">--- nix.dev</p>
            </motion.div>
            <motion.div className="absolute bottom-5 right-5">
                <p className="text-white">X039VII32 ---</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2,
                    duration: 2,
                    ease: "easeIn"
                }}
                className="flex flex-col py-[1.5rem] relative justify-center items-center">
                <h2 className="absolute left-0 top-0 text-[1.3rem] font-extralight text-white/40">
                    I am
                </h2>
                <h2 className="text-[3.2rem] font-extralight text-white">
                    <FuzzyText orignal="Nishal Shah." className="font-extralight">
                        Nishal Shah.
                    </FuzzyText>
                </h2>
                <h2 className="absolute right-0 bottom-0 text-[1.3rem] font-extralight text-white/40">
                    Software Developer
                </h2>
            </motion.div>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.7,
                    ease: "easeIn"
                }}
                className="flex items-center justify-center h-[5rem] w-full fixed bottom-5">
                <FloatingDockDemo />
            </motion.div>
        </div>
    </>
}  
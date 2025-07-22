import { motion } from "motion/react"

type PropsType = {
    text: string,
}
export const FloatingThingis = (props: PropsType) => {
    return <>
        <motion.div 
        initial={{
            y:0
        }}
        animate={{
            y:10
        }}
        transition={{
            delay: 5,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
        }}
        className="w-full h-full flex justify-center items-center bg-white/10 rounded-2xl">
            <p className="text-white font-md uppercase">{props.text}</p>
        </motion.div>
    </>
}
"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Question({ type }: any) {
  return (
    <div className="animati max-w-4xl w-full">
      <>
        {type === "gender" && (
          <motion.div
            key={"gender"}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5 }}
            className=" bg-white rounded-lg p-12 space-y-6"
          >
            <h2 className="text-2xl font-semibold">Gender</h2>
            <div className="space-y-2">
              <div className="w-full px-2 h-10 rounded-sm border flex gap-2 items-center border-slate-300">
                <span className="w-6 h-6 text-lg flex items-center justify-center border border-black rounded-sm">
                  A
                </span>
                <p className="text-lg">Male</p>
              </div>
              <div className="w-full px-2 h-10 rounded-sm border flex gap-2 items-center border-slate-300">
                <span className="w-6 h-6 text-lg flex items-center justify-center border border-black rounded-sm">
                  A
                </span>
                <p className="text-lg">Male</p>
              </div>
              <div className="w-full px-2 h-10 rounded-sm border flex gap-2 items-center border-slate-300">
                <span className="w-6 h-6 text-lg flex items-center justify-center border border-black rounded-sm">
                  A
                </span>
                <p className="text-lg">Male</p>
              </div>
            </div>
          </motion.div>
        )}

        {type === "race" && (
          <motion.div
            key={"race"}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -200 }}
            transition={{ duration: 0.5 }}
            className=" bg-white rounded-lg p-12 space-y-6"
          >
            <h2 className="text-2xl font-semibold">Race</h2>
            <div className="space-y-2">
              <div className="w-full px-2 h-10 rounded-sm border flex gap-2 items-center border-slate-300">
                <span className="w-6 h-6 text-lg flex items-center justify-center border border-black rounded-sm">
                  A
                </span>
                <p className="text-lg">Male</p>
              </div>
              <div className="w-full px-2 h-10 rounded-sm border flex gap-2 items-center border-slate-300">
                <span className="w-6 h-6 text-lg flex items-center justify-center border border-black rounded-sm">
                  A
                </span>
                <p className="text-lg">Male</p>
              </div>
              <div className="w-full px-2 h-10 rounded-sm border flex gap-2 items-center border-slate-300">
                <span className="w-6 h-6 text-lg flex items-center justify-center border border-black rounded-sm">
                  A
                </span>
                <p className="text-lg">Male</p>
              </div>
            </div>
          </motion.div>
        )}
      </>
    </div>
  );
}

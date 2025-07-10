import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { Gauge } from "lucide-react";

export default function CounterBox({msg,_count}) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    const animation = animate(count, _count, {
      duration: 2.5,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });

    return () => animation.stop();
  }, []);

  return (
    <div className="md:w-auto w-full p-6 rounded-2xl border border-gray-50 shadow-md =bg-gray-900 =text-center space-y-4">
      <div className="flex items-center justify-start text-3xl font-bold text-gray-900">
        <Gauge className="w-6 h-6 mr-2 text-blue-500" />
        {displayValue.toLocaleString()}+
      </div>

      {/* Gradient Separator */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-400 via-gray-500 to-black-900 rounded-full" />

      <div className="text-gray-500 text-md font-medium tracking-wide">
        {msg}
      </div>
    </div>
  );
}

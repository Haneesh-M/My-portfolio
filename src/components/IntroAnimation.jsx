import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const timerRef = useRef(null);

    const handleComplete = () => {
        setIsVisible(false);
        document.body.style.overflow = '';
        if (timerRef.current) clearTimeout(timerRef.current);
        // Allow the exit animation to process before unmounting
        setTimeout(onComplete, 500);
    };

    useEffect(() => {
        // Prevent scrolling while intro is active
        document.body.style.overflow = 'hidden';

        timerRef.current = setTimeout(() => {
            handleComplete();
        }, 3200); // 3.2 seconds total to ensure timing works well

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: 'blur(5px)' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Skip Intro Button */}
                    <button
                        onClick={handleComplete}
                        className="absolute top-6 right-6 z-50 px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium text-slate-400 border border-slate-800 rounded-full hover:bg-slate-800/50 hover:text-white hover:border-slate-600 transition-all backdrop-blur-md"
                    >
                        Skip
                    </button>

                    {/* Left Cannon */}
                    <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: [0, -2, 0] /* subtle recoil */ }}
                        transition={{ duration: 0.6, ease: 'easeOut', times: [0, 0.9, 1], delay: 0.8 }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[60px] md:w-[120px] h-[16px] md:h-[24px] bg-gradient-to-r from-slate-900 via-slate-600 to-slate-400 rounded-r-sm z-10 shadow-[2px_0_15px_rgba(255,255,255,0.05)]"
                    >
                        {/* Barrel tension glow */}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute right-0 top-0 bottom-0 w-[8px] bg-orange-400 blur-[3px]"
                        />
                    </motion.div>

                    {/* Right Cannon */}
                    <motion.div
                        initial={{ x: 100 }}
                        animate={{ x: [0, 2, 0] /* subtle recoil */ }}
                        transition={{ duration: 0.6, ease: 'easeOut', times: [0, 0.9, 1], delay: 0.8 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-[60px] md:w-[120px] h-[16px] md:h-[24px] bg-gradient-to-l from-slate-900 via-slate-600 to-slate-400 rounded-l-sm z-10 shadow-[-2px_0_15px_rgba(255,255,255,0.05)]"
                    >
                        {/* Barrel tension glow */}
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute left-0 top-0 bottom-0 w-[8px] bg-orange-400 blur-[3px]"
                        />
                    </motion.div>

                    {/* Projectiles Container */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none h-[10px]">
                        {/* Left Projectile */}
                        <motion.div
                            initial={{ left: '60px', opacity: 0, scaleX: 0 }}
                            animate={{ left: '50%', opacity: [0, 1, 0], scaleX: [1, 2, 0.5] }}
                            transition={{ duration: 0.3, delay: 0.8, ease: 'linear' }}
                            className="absolute top-1/2 -translate-y-1/2 w-[40px] h-[4px] bg-white rounded-full shadow-[0_0_15px_6px_rgba(255,165,0,0.8)] origin-left -translate-x-full"
                        />

                        {/* Right Projectile */}
                        <motion.div
                            initial={{ right: '60px', opacity: 0, scaleX: 0 }}
                            animate={{ right: '50%', opacity: [0, 1, 0], scaleX: [1, 2, 0.5] }}
                            transition={{ duration: 0.3, delay: 0.8, ease: 'linear' }}
                            className="absolute top-1/2 -translate-y-1/2 w-[40px] h-[4px] bg-white rounded-full shadow-[0_0_15px_6px_rgba(255,165,0,0.8)] origin-right translate-x-full"
                        />
                    </div>

                    {/* Center Collision Flash & Explosion */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 3, 6], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(249,115,22,0.8)_20%,transparent_60%)] mix-blend-screen pointer-events-none z-30"
                    />

                    {/* Text Reveal Container */}
                    <div className="flex flex-col items-center justify-center z-40 pointer-events-none w-full h-screen absolute inset-0">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, delay: 1.3, ease: 'easeOut' }}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] uppercase tracking-tight text-center px-4"
                        >
                            Haneesh Markapudi
                        </motion.h1>
                    </div>

                    {/* Very subtle background ambient smoke/particles */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2.5, delay: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.05)_0%,transparent_70%)] pointer-events-none z-0"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroAnimation;

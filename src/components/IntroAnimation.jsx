import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Prevent scrolling while intro is active
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = '';
            // Allow framer-motion exit animation to finish before unmounting fully
            setTimeout(onComplete, 1000);
        }, 4000); // 4 seconds total cinematic sequence

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Camera Shake Wrapper */}
                    <motion.div
                        animate={{
                            x: [0, -2, 2, -4, 4, -6, 6, -8, 8, -4, 4, 0],
                            y: [0, 2, -2, 4, -4, 6, -6, 8, -8, 4, -4, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 1,
                            ease: 'linear',
                        }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Ambient Particles */}
                        <motion.div
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 4, times: [0, 0.5, 1] }}
                            className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"
                        />

                        {/* Cannon Silhouette (bottom center) */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: [0, 0.6, 0], y: [100, 50, 200] }}
                            transition={{ duration: 2.5, delay: 0.5, times: [0, 0.4, 1], ease: 'easeIn' }}
                            className="absolute bottom-[-15%] w-[140px] h-[350px] bg-gradient-to-t from-black via-[#111] to-[#333] rounded-t-[40px] shadow-[inset_0_20px_50px_rgba(255,255,255,0.05)] blur-[1px]"
                            style={{ clipPath: 'polygon(20% 0, 80% 0, 100% 100%, 0 100%)' }}
                        />

                        {/* Explosion Flash Burst */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 4, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 0.8, delay: 1.5, ease: 'circOut' }}
                            className="absolute w-[300px] h-[300px] bg-white rounded-full mix-blend-screen blur-[40px] pointer-events-none"
                        />

                        {/* Fire Blast */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0, y: 0 }}
                            animate={{ scale: [0, 1.5, 2.5], opacity: [0, 1, 0], y: [0, -100, -300] }}
                            transition={{ duration: 1.5, delay: 1.5, ease: 'easeOut' }}
                            className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,165,0,0.9)_0%,rgba(255,69,0,0.6)_40%,transparent_70%)] blur-[25px] mix-blend-screen pointer-events-none"
                        />

                        {/* Sparks/Embers from impact */}
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={`spark-${i}`}
                                initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                                animate={{
                                    scale: [0, 1.5, 0],
                                    x: (Math.random() - 0.5) * 800,
                                    y: (Math.random() - 1) * 800,
                                    opacity: [1, 1, 0],
                                }}
                                transition={{ duration: 1 + Math.random() * 1.5, delay: 1.5, ease: 'easeOut' }}
                                className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_15px_3px_rgba(255,215,0,0.9)] pointer-events-none"
                            />
                        ))}

                        {/* Text Reveal from Fire */}
                        <div className="flex flex-col items-center justify-center z-20 pointer-events-none">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)', y: 50 }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
                                transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
                                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-orange-200 to-orange-600 drop-shadow-[0_0_35px_rgba(255,100,0,0.8)] uppercase tracking-tighter"
                                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
                            >
                                Haneesh Markapudi
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 1, delay: 2.2, ease: 'easeOut' }}
                                className="text-lg sm:text-xl md:text-3xl text-orange-400 tracking-[0.4em] font-medium uppercase mt-4 sm:mt-6 drop-shadow-[0_0_15px_rgba(255,69,0,0.6)]"
                            >
                                Backend Developer
                            </motion.h2>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroAnimation;

import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Animation for menu
    const menuAnimation = useSpring({
        transform: menuOpen ? 'translateX(0%)' : 'translateX(-100%)',
        opacity: menuOpen ? 1 : 0,
        config: { tension: 170, friction: 20 },
    });

    return (
        <div className="relative">
            <div className="navbar max-w-[1440px] mx-auto flex items-center justify-between py-3 px-5">
                {/* Navigation Links for larger screens */}
                <div className="sm:flex items-center lg:gap-[60px] hidden">
                    <NavLink className={"font-normal hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded"} to={"/"}>
                        Home
                    </NavLink>
                    <NavLink className={"font-normal hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded"} to={"/about"}>
                        About
                    </NavLink>
                    <NavLink className={"font-normal hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded"} to={"/contact"}>
                        Contact
                    </NavLink>
                </div>

                {/* Logo */}
                <NavLink to={"/"}>
                    <h3 className={"logo text-[#37447E] font-bold text-[26px]"}>Landing</h3>
                </NavLink>

                {/* Button and menu toggle */}
                <div className={"flex items-center gap-3"}>
                    <Button className={"px-10 bg-black text-white"}>Buy Now</Button>
                    <div className="sm:hidden block">
                        <i
                            className={"fa-solid fa-bars text-xl cursor-pointer"}
                            onClick={() => setMenuOpen(!menuOpen)}
                        ></i>
                    </div>
                </div>
            </div>

            {/* Overlay for the menu */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Menu */}
            <animated.div
                style={menuAnimation}
                className="fixed top-0 left-0 w-[70%] h-full bg-white shadow-lg z-30 flex flex-col items-start gap-5 p-5 sm:hidden">
                {/* Close Icon */}
                <div className="w-full flex justify-end mb-3">
                    <i
                        className="fa-solid fa-times text-2xl cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    ></i>
                </div>
                <NavLink
                    className={"font-normal hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded w-full"}
                    to={"/"}
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    className={"font-normal hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded w-full"}
                    to={"/about"}
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </NavLink>
                <NavLink
                    className={"font-normal hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded w-full"}
                    to={"/contact"}
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </NavLink>
            </animated.div>
        </div>
    );
}

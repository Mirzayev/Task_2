import { NavLink } from "react-router-dom";
import { Button } from "antd";

export default function Footer() {
    return (
        <div className="footer bg-[#E7ECFF] max-w-[1536px] mx-auto px-5">
            <div
                className="container flex flex-wrap items-center justify-between max-w-[1440px] mx-auto pt-[60px] border-b-2 border-slate-300 pb-5">
                <p className="text-sm sm:text-base hidden sm:block">©2023 Yourcompany</p>
                <NavLink to={"/"}>
                    <h3 className="logo text-[#37447E] font-bold text-[20px] sm:text-[26px]">Landing</h3>
                </NavLink>
                <Button className="bg-black text-white px-5 py-2 text-sm sm:text-base">Purchase Now</Button>
            </div>
            <div className="mt-10 max-w-[1440px] mx-auto flex flex-wrap items-center justify-between pb-9">
                <div className="flex flex-wrap items-center w-full justify-center gap-4 lg:gap-[60px] text-[#929ECC]">
                    <NavLink
                        className="font-normal text-sm sm:text-base hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded"
                        to={"/"}>
                        Home
                    </NavLink>
                    <NavLink
                        className="font-normal text-sm sm:text-base hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded"
                        to={"/about"}>
                        About
                    </NavLink>
                    <NavLink
                        className="font-normal text-sm sm:text-base hover:text-slate-700 hover:bg-slate-100 px-4 py-1 rounded"
                        to={"/contact"}>
                        Contact
                    </NavLink>
                </div>
                <div className="text-[#929ECC] w-full flex justify-center items-center gap-[20px] sm:gap-[30px] text-base sm:text-lg mt-5 lg:mt-0">
                    <i className="fa-brands fa-facebook cursor-pointer hover:text-slate-900 transition-all"></i>
                    <i className="fa-brands fa-linkedin cursor-pointer hover:text-slate-900 transition-all"></i>
                    <i className="fa-brands fa-twitter cursor-pointer hover:text-slate-900 transition-all"></i>
                    <i className="fa-brands fa-youtube cursor-pointer hover:text-slate-900 transition-all"></i>
                    <i className="fa-brands fa-instagram cursor-pointer hover:text-slate-900 transition-all"></i>
                </div>
            </div>
        </div>
    );
}

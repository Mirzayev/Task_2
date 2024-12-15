import rectangle from '../assets/images/Rectangle.png'
import {Button} from "antd";

export default function SuitPrice() {

    return (
        <div className="SuitPrice relative my-20">

            <img className={"absolute w-full h-full top-0 "} src={rectangle} alt=""/>
            <div className={"flex  justify-center w-full relative lg:pt-[107px] pt-10"}>
                <div className={" max-w-[600px] text-center "}>
                    <h3 className={"text-[36px] font-medium"}>A Price To Suit Everyone</h3>
                    <p className={"text-[#6F7CB2] mt-4 mb-8"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <h4 className={"text-[50px] font-medium py-1"}>$40</h4>
                    <p className={"text-[#37447E]"}>UI Design Kit</p>
                    <p className={"mt-20 mb-3 text-[#5D6970]"}>See, One price. Simple.</p>
                    <Button className={"w-[190px] bg-black text-white"}>Purchase Now</Button>
                </div>
            </div>
        </div>
    )
}
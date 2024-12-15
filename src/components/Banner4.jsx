import bannerImage from '../assets/images/undraw_social_influencer_sgsv.png'
export default function Banner4() {


    return (
        <div className="Banner2 max-w-[1440px] mx-auto lg:mt-[260px] mt-10 flex flex-col-reverse lg:flex-row items-center justify-between px-5">
            <img src={bannerImage} alt=""/>

            <div className="Banner2 max-w-[560px] ">
                <h3 className={"text-[36px] font-medium"}>Light, Fast & Powerful</h3>
                <p className={"mt-4 text-[#6F7CB2]"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br/> <br/>
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                    enim.</p>


            </div>
            <div>

            </div>
        </div>
    )
}
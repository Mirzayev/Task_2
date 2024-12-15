import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import bannerImage1 from '../assets/images/Group.png';
import bannerImage2 from '../assets/images/Group.png';
import bannerImage3 from '../assets/images/Group.png';
import bg from '../assets/images/Path.png';
import { Button } from 'antd';

export default function Banner() {
    const images = [bannerImage1, bannerImage2, bannerImage3];
    const [currentImage, setCurrentImage] = useState(0);

    // Image animation
    const imageAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
        config: { duration: 1000 },
    });

    // Change image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="Banner relative lg:pt-[100px] pt-10 max-w-[1536px] mx-auto overflow-hidden">
            {/* Main Content */}
            <div className="relative lg:flex items-center lg:justify-between px-5 z-20">
                <div className="text-center lg:text-left mx-auto lg:mx-0">
                    <h2 className="lg:text-[50px] text-[35px] font-medium max-w-[540px]">
                        Introduce Your Product Quickly & Effectively
                    </h2>
                    <p className="mt-5 lg:mb-[70px] mb-5 max-w-[540px]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </p>
                    <div className="flex items-center gap-[30px] max-w-[540px] my-3 justify-center lg:justify-start">
                        <Button className="w-[190px] bg-black text-white hover:bg-gray-800">Purchase UI Kit</Button>
                        <Button className="w-[190px] hover:text-blue-500">Learn More</Button>
                    </div>
                </div>
                <animated.div style={imageAnimation} className="flex justify-center items-center w-2/3 lg:w-auto mx-auto">
                    <img className="object-contain" src={images[currentImage]} alt="Banner" />
                </animated.div>
            </div>

            {/* Background image */}
            <div className="absolute top-0 right-0">
                <img src={bg} alt="Background" className="" />
            </div>
        </div>
    );
}

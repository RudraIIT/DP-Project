import { useEffect, useRef } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "../ui/card";

interface ThumbnailProps {
    video: string;
    thumbnail: string;
    title: string;
    description: string;
    className?: string;
    description2: string;
}

const Thumbnail : React.FC<ThumbnailProps> = ({ video, thumbnail, title, description ,className,description2 }) => {
    const thumbanil = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const close = useRef<SVGSVGElement>(null);
    const videoPause = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        thumbanil.current?.addEventListener("click", () => {
            videoRef.current?.classList.add("flex");
            videoRef.current?.classList.remove("hidden");
        });
        close.current?.addEventListener("click", () => {
            videoRef.current?.classList.add("hidden");
            videoRef.current?.classList.remove("flex");
            videoPause.current?.pause();
        });
    }, [])
    return (
        <>
            <Card className={`${className} cursor-pointer m-4 z-[5] pb-10 h-[300px]`} ref={thumbanil}>
                <CardHeader>
                    <CardTitle style={{ fontSize: "20px", fontFamily: "Arial" }}>{title}</CardTitle>
                    <CardDescription style={{ fontSize: "16px", fontFamily: "Arial" }}>{description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                    <img className="w-full h-full object-cover rounded-2xl" src={thumbnail} alt={title} />
                    <svg className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-65.000000, -3803.000000)" fill="#000000">
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335" id="play-[#1000]"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </CardContent>
            </Card>
            <div className="hidden fixed top-0 h-screen w-screen z-10 p-4 justify-between" ref={videoRef}>
                <svg ref={close} className="h-10 w-10 cursor-pointer absolute top-7 right-7 z-20" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#ffffff"/>
                </svg>
                <video className="h-full w-[48%] rounded-3xl backdrop-blur-md" src={video} ref={videoPause} controls />
                <Card className="h-full w-[48%] backdrop-blur-3xl overflow-y-scroll">
                    <CardHeader>
                        <CardTitle style={{fontSize:"20px"}}>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-1 text-sm">
                            {description2.split('.').map((line, index) => (
                                <p key={index} className="text-white">{line}</p>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Thumbnail;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Thumbnail from "./Thumbnail";

interface TypeProps {
    url: string;
    data: {
        videoUrl: string;
        thumbnail: string;
        title: string;
        description: string;
        description2: string;
    }[]
}

const Type: React.FC<TypeProps> = ({ data, url }) => {
    const [videos, setVideos] = useState(data);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, [url, setVideos]);
    const navigate = useNavigate();
    const handlePage = () => {
        navigate(-1);
    }
    return (
        <>
        <button onClick={handlePage} className="text-xl bg-red-600 z-[1000] fixed rounded-lg">Back</button>
        <div className="h-screen flex flex-wrap justify-center items-center overflow-y-scroll">
            {videos.map((video: {
                    videoUrl: string,
                    thumbnail: string,
                    title: string,
                    description: string,
                    description2: string,
                }) => {
                    const { videoUrl, thumbnail, title, description,description2 } = video;
                    return (
                        <Thumbnail
                            key={title}
                            video={videoUrl}
                            thumbnail={thumbnail}
                            title={title}
                            description={description}
                            description2={description2}
                            className="w-[20vw] max-w-[300px] h-[40vh] max-h-[500px] backdrop-blur-md scale-90"
                        />
                    );
                })
            }
        </div>
        </>
    )
}

export default Type;
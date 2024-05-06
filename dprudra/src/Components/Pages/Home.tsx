import Alltypes from '../../data/types.json';
import CardComponent from '../Components/CardComponent';
import { Link } from 'react-router-dom';
interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
    const clickCount = JSON.parse(localStorage.getItem('clickCount') as string) || Alltypes.types.map((type:any)=>({title:type.title,clicks:0}));
    const handleClick = (title:any) => {
        const result = clickCount.map((type : any)=>{
            return type.title === title ? {...type, clicks : type.clicks+1} : type
        }).sort((a:any,b:any)=>b.clicks-a.clicks);
        localStorage.setItem('clickCount', JSON.stringify(result));
    }
    return (
        <>
            <h1 className='fixed top-10 left-1/2 -translate-x-1/2 text-3xl'>Smart Kit</h1>
            <div className="h-screen w-screen overflow-x-hidden fixed flex justify-center items-center gap-20 scale-100 overflow-y-scroll">
                {/* {types.map((type: {
                    title: string;
                    description: string;
                    content: string;
                }, index) => {
                    const { title, description, content } = type;
                    return (
                        // <div key={title} className={`w-[40vw] max-w-[300px] h-[40vh] max-h-[500px] fixed ${index === 0 ?  "top-[5vh] left-[5vw]" : ""} ${index === 1 ? "top-[5vh] right-[5vw]" : ""} ${index === 2 ? "bottom-[5vh] left-1/2 -translate-x-1/2" : ""}`}>
                        //     <CardComponent
                        //         title={title}
                        //         description={description}
                        //         content={content}
                        //         href={`/type${index+1}`}
                        //     />
                        // </div>
                        <div key={title} className={`w-[20vw] max-w-[300px] h-[40vh] max-h-[500px] backdrop-blur-md`}>
                            <CardComponent
                                title={title}
                                description={description}
                                content={content}
                                href={`/type${index+1}`}
                            />
                        </div>
                    );
                })} */}
                {
                    clickCount.map((type:any) => {
                        const i = Alltypes.types.findIndex((t:any)=>t.title===type.title);
                        const currentType = Alltypes.types[i];
                        return(
                            <div onClick= {()=>handleClick(currentType.title)} key={currentType.title} className={`w-[20vw] max-w-[300px] h-[40vh] max-h-[500px] backdrop-blur-md`}>
                                <CardComponent
                                    title={currentType.title}
                                    description={currentType.description}
                                    content={currentType.content}
                                    href={`/type${i+1}`}
                                />
                            </div>
                    )}
                    )
                }
            </div>

            {/* Speech Recognition Icon */}
            <div className="fixed bottom-10 right-10">
                <Link to="/speech-recognition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </Link>
            </div>
        </>
    )
}

export default HomePage;

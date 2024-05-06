import Type from "../Components/Type";
import videos from '../../data/videos2.json';

interface Type2Props {}

const Type2: React.FC<Type2Props> = () => {
    return (
        <Type url="" data={videos.types}/>
    );
}

export default Type2;
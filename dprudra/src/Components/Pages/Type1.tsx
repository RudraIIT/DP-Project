import Type from "../Components/Type";
import videos from '../../data/videos1.json';

interface Type1Props {}

const Type1: React.FC<Type1Props> = () => {
    return (
        <Type url="" data={videos.types} />
    );
}

export default Type1;
import Type from "../Components/Type";
import videos from '../../data/videos3.json';

interface Type3Props {}

const Type3 : React.FC<Type3Props> = () => {
    return (
        <Type url="" data={videos.types} />
    );
}

export default Type3;
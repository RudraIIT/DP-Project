import { Link } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "../ui/card";

interface CardComponentProps {
    title: string;
    description: string;
    content: string;
    className?: string;
    href: string;
}

const CardComponent : React.FC<CardComponentProps> = ({ title, description, content, className, href }) => {
    return (
        <Link to={href}>
            <Card className={`${className}`}>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <img className="w-full h-full object-cover rounded-2xl" src={content} alt={title} />
                </CardContent>
            </Card>
        </Link>
        
    )
}

export default CardComponent;
import { UserSquare } from "iconsax-react";

interface CardProps {
  title: string;
  description: string;
}

function Cards({ title, description }: CardProps) {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper_details">
        <div className="card-wrapper_details_title">
          <UserSquare color="#2b3ca1" />
          <p>{title}</p>
        </div>
        <p className="h-md card-wrapper_details_description">{description}</p>
      </div>
    </div>
  );
}

export default Cards;

import {Card} from "@mui/material";
import {Image} from "react-bootstrap";

type Props = {
  name: string | null;
  title: string | null;
  image: string | null;
};

export default function NewsCard(props: Props) {
  return (
    <Card className="h-2/4 p-3">
      <div className="flex mb-3">
        <Image src={`${props.image}`} height="1px" width="30px" alt="weather widget" />
        <span className="mx-3">{props.name}</span>
      </div>
      <h5>{props.title}</h5>
    </Card>
  );
}

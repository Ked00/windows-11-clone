import {Card} from "@mui/material";
import {Image} from "react-bootstrap";

type Props = {
  name: string | undefined | null;
  title: string | undefined | null;
  image: string | undefined | null;
  marginBottom?: boolean;
  classname?: string;
};

export default function NewsCard(props: Props) {
  const marginBottom = props.marginBottom ? "mb-1" : "";

  return (
    <Card className={`h-2/4 p-3 ${marginBottom} ${props.classname}`}>
      <div className="flex mb-2">
        <Image src={`${props.image}`} height="1px" width="30px" alt="weather widget" />
        <span className="mx-2">{props.name}</span>
      </div>
      <div className="h-3/4 flex items-center">
        <h5>{props.title}</h5>
        <Image
          src={`${props.image}`}
          height="140px"
          width="150px"
          alt="weather widget"
          className="rounded"
        />
      </div>
    </Card>
  );
}

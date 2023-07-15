import {Card, Image} from "react-bootstrap";
import {Grid} from "@mui/material";

type Props = {
  name: string | undefined | null;
  title: string | undefined | null;
  image: string | undefined | null;
};

export default function FullSizeNewsCard(props: Props) {
  return (
    <>
      <Grid item xs={6}>
        <Card className="h-[365px] bg-[#e0eaef]">
          <Card.Img src={`${props.image}`} alt="desktop pic" className="h-48" />
          <div className="flex p-3">
            <Image src={`${props.image}`} alt="news" className="w-[30px]" />
            <span className="mx-2">{props.name}</span>
          </div>
          <Card.Body>
            <h5>{props.title}</h5>
          </Card.Body>
        </Card>
      </Grid>
    </>
  );
}

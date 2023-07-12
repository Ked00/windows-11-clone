import {Card, Image} from "react-bootstrap";
import {Grid} from "@mui/material";

type Props = {
  name: string | undefined | null;
  title: string | undefined | null;
  image: string | undefined | null;
};

export default function WideNewsCard(props: Props) {
  return (
    <>
      <Grid item xs={17} className="h-[400px] mb-2">
        <Card className="h-3/4 text-white relative">
          <Card.Img src={`${props.image}`} alt="sour" className="h-full" />
          <Card.ImgOverlay>
            <div className="absolute bottom-14">
              <div className="flex">
                <Image src={`${props.image}`} alt="news" className="w-[30px] mb-2" />
                <span className="mx-2">{props.name}</span>
              </div>
              <h5 className="w-5/6">{props.title}</h5>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Grid>
    </>
  );
}

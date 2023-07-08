import Image from "next/image";

type Props = {
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore: number;
  awayTeamScore: number;
  homeTeamImage?: string;
  awayTeamImage?: string;
};

export default function GameCard(props: Props) {
  return (
    <div className="flex justify-between rounded items-center border-1 mb-1">
      <div className="">
        <Image src={`/../public/teamLogo.png`} width={30} height={30} alt="change alt" />
        <p className="w-32">{props.homeTeamName}</p>
      </div>

     {props.homeTeamScore >= 0 ?  <h5>{`${props.homeTeamScore} - ${props.awayTeamScore}`}</h5> : ""}

      <div className="">
        <Image src={`/../public/teamLogo.png`} width={30} height={30} alt="change alt" />
        <p className="w-32">{props.awayTeamName}</p>
      </div>
    </div>
  );
}

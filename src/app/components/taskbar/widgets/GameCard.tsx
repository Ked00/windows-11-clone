import Image from "next/image";

type Props = {
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore?: number;
  awayTeamScore?: number;
  homeTeamImage?: string;
  awayTeamImage?: string;
};

export default function GameCard(props: Props) {
  return (
    <div className="flex justify-between border-3 border-red-400 rounded mb-2 items-center">
      <div className="p-2">
        <Image src={`/../public/teamLogo.png`} width={30} height={30} alt="change alt" />
        <p>{props.homeTeamName}</p>
      </div>

      <h4>{`${props.homeTeamScore} - ${props.awayTeamScore}`}</h4> 

      <div>
        <Image src={`/../public/teamLogo.png`} width={30} height={30} alt="change alt" />
        <p>{props.awayTeamName}</p>
      </div>
    </div>
  );
}

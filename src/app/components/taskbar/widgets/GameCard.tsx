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
    <div className="flex justify-between items-center rounded bg-[#f0f4fe] mb-1">
      <div className="flex flex-col items-center text-center">
        <Image src={`/../public/images/philly.jpeg`} width={50} height={50} alt="change alt" className="mt-2"/>
        <p className="w-32">{props.homeTeamName}</p>
      </div>

      {props.homeTeamScore >= 0 ? <h1>{`${props.homeTeamScore} - ${props.awayTeamScore}`}</h1> : ""}

      <div className="flex flex-col items-center text-center">
        <Image src={`/../public/images/philly.jpeg`} width={50} height={50} alt="change alt" />
        <p className="w-32">{props.awayTeamName}</p>
      </div>
    </div>
  );
}

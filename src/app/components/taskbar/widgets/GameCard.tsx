import Image from "next/image";

type Props = {
  homeTeam: string;
  awayTeam: string;
  homeTeamScore: number;
  homeTeamScore: number;
  homeTeamImage: string;
  awayTeamImage: string;
};

export default function GameCard() {
  return (
    <div className="flex justify-between border-3 border-red-400 rounded mb-2 items-center">
      <div className="p-2">
        <Image src="/../public/teamLogo.png" width={30} height={30} alt="change alt" />
        <p>Pirates</p>
      </div>

      <h4>2 - 4</h4>

      <div>
        <Image src="/../public/teamLogo.png" width={30} height={30} alt="change alt" />
        <p>Pirates</p>
      </div>
    </div>
  );
}

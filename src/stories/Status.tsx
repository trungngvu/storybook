import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import UndoneSvg from "./assets/undone.svg";
import DoneSvg from "./assets/done.svg";

export const Undone = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={UndoneSvg}
        alt=""
        className="w-[16px] h-[16px] mr-2 inline-block"
      />
      Chưa thực hiện
    </div>
  );
};

export const Done = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={DoneSvg}
        alt=""
        className="w-[16px] h-[16px] mr-2 inline-block"
      />
      Đã hoàn thành
    </div>
  );
};

interface StatusProps {
  percentage: number;
}

/**
 * Primary UI component for user interaction
 */
export const Status = ({ percentage }: StatusProps) => {
  return (
    <div className="flex justify-center items-center">
      <CircularProgressbar
        value={percentage ? percentage : 0}
        strokeWidth={16}
        styles={buildStyles({
          pathColor: `#45B020`,
        })}
        className="w-[16px] h-[16px] mr-2"
      />
      Đang thực hiện
    </div>
  );
};

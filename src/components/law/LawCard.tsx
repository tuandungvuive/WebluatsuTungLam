import { useNavigate } from "react-router-dom";

type Props = {
  tagline: string;
  title: string;
  description: string;
  id: string;
};

const LawCard = (props: Props) => {
  const { title, id } = props;
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-[#064273] min-w-96">
      <div
        className="flex m-3 flex-col justify-center items-center h-[225px] cursor-pointer group"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate(`/laws/${id}`);
        }}
      >
        <h2 className="font-bold text-3xl">{title}</h2>
        <div className="w-1/4 h-[4px] rounded-xl bg-[#0052A2] transition-all duration-300 mt-2 opacity-0 group-hover:opacity-100 "></div>
      </div>
    </div>
  );
};

export default LawCard;

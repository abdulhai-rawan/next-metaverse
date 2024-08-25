import { Feature } from "@/types";

interface NewFeaturesProps {
  data: Feature;
}

const NewFeatures: React.FC<NewFeaturesProps> = ({ data }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className="flexCenter w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
      <img
        src={data.imgUrl}
        alt={data.title}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      Title {data.title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
      {data.subtitle}
    </p>
  </div>
);

export default NewFeatures;
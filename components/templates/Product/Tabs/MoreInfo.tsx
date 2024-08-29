import React from "react";
interface Props {
  weight: number | undefined;
  suitableFor: string | undefined;
  smell: string | undefined;
}
const MoreInfo = ({ weight, suitableFor, smell }: Props) => {
  return (
    <div className="container">
      <p className="mb-5"> اطلاعات بیشتر :</p>
      <hr />
      <div className="mt-5">
        <div className="flex items-center  gap-5 justify-between mt-5">
          <p>وزن</p>
          <p>{weight} گرم</p>
        </div>
        <div className="flex items-center gap-5 justify-between mt-5">
          <p>مناسب برای</p>
          <p className="text-justify">{suitableFor}</p>
        </div>
        <div className="flex items-center gap-5 justify-between mt-5">
          <p> میزان بو</p>
          <p>{smell}</p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

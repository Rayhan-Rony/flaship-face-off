import React from "react";
import { useLoaderData, useParams } from "react-router";
import Button from "../Components/Ui/Button";
import { MdShoppingCart } from "react-icons/md";
import { MdBookmarkAdd } from "react-icons/md";

const phoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
  console.log(data);
  const {
    name,
    brand,
    description,
    storage,
    price,
    model,
    camera_info,
    image,
  } = singlePhone;
  return (
    <div>
      <div className="py-12 w-full">
        <img
          src={image}
          alt="Banner Img"
          className="w-full  mx-auto md:auto mb-4"
        />
      </div>
      <div className="flex justify-between ">
        <h1 className="font-thin text-7xl text-gray-900">{name}</h1>
        <div className="flex gap-4">
          <Button label={<MdShoppingCart></MdShoppingCart>}></Button>
          <Button label={<MdBookmarkAdd></MdBookmarkAdd>}></Button>
        </div>
      </div>
    </div>
  );
};

export default phoneDetails;

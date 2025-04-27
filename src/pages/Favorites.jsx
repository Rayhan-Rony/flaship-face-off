import React, { useEffect, useState } from "react";
import { getFavorites, removeFavorite } from "../Utilitys/LocalStorage";
import PhoneCard from "../Components/PhoneCard";
import EmptyState from "../Components/Ui/EmptyState";

const Favorites = () => {
  const [displayPhones, setDisplayPhones] = useState([]);
  useEffect(() => {
    const getPhones = getFavorites();
    setDisplayPhones(getPhones);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const favorites = getFavorites();
    setDisplayPhones(favorites);
  };
  if (displayPhones.length < 1) return <EmptyState></EmptyState>;
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayPhones.map((phone) => (
          <PhoneCard
            handleRemove={handleRemove}
            deletable={true}
            key={phone.id}
            phone={phone}
          ></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

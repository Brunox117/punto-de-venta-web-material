import { useSelector } from "react-redux";
import { Promo } from "./Promo";
export const Promos = () => {
  const { promos } = useSelector((state) => state.firebase);
  return (
    <div>
      {promos.map((promo) => (
        <Promo
          key={promo.id}
          promo={promo}
        />
      ))}
    </div>
  );
};

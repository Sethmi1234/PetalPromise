import { createContext, useState } from "react";

export const BouquetContext = createContext();

export const BouquetProvider = ({ children }) => {
  const [flowers, setFlowers] = useState({});
  const [leaf, setLeaf] = useState(null);
  const [note, setNote] = useState("");

  return (
    <BouquetContext.Provider
      value={{ flowers, setFlowers, leaf, setLeaf, note, setNote }}
    >
      {children}
    </BouquetContext.Provider>
  );
};
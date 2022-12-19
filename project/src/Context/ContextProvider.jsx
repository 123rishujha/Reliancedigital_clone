import { createContext, useState } from "react";

const inital = {
  known: false,
  name: "",
  mobile:"",
  address: ""
};

export const AddresContext = createContext();

export default function ContextProvider({ children }) {
  const [location, setLocation] = useState(inital);

  console.log(location);

  const handleAddress = (value) => {
    setLocation({ ...value, known: true });
  };

  const handleReset = () => {
    setLocation(inital);
  };


  return (
    <AddresContext.Provider value={{ handleAddress,handleReset,location }}>
      {children}
    </AddresContext.Provider>
  );
}

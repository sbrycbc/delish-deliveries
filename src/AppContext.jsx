import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();



const url = "https://apis-for-beginner.bscebeci.de/api/employees";

export const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedEmployees, setLoadedEmployees] = useState([]);
  
    useEffect(() => {
      (async () => {
        const response = (await axios.get(url)).data;
        setLoadedEmployees(response);
        setIsLoading(false);
      })();
    }, [loadedEmployees]);

  
    return (
      <AppContext.Provider
        value={{
          isLoading,
          loadedEmployees,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };


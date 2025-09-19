"use client";
import { createContext, useEffect, useState } from "react";
import { allbuildersAction } from "../app/utils/builderActions";
import { allCitiesAction } from "../app/utils/citiesActions";
import { allLocationAction } from "../app/utils/locationActions";

export const ApiDataContext = createContext();

export default function ApiDataContextProvider({ children }) {
  const [apiBuilderList, setapiBuilderList] = useState([]);
  const [apiCitiesList, setApiCitiesList] = useState([]);
  const [apiLocationList, setapiLocationList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch builders
        const builderResult = await allbuildersAction();
        if (builderResult?.data) {
          const formattedBuilders = builderResult.data.map((b) => ({
            value: b.name, // use _id for DB relations
            label: b.name, // display name
          }));
          setapiBuilderList(formattedBuilders);
        }

        // fetch cities
        const cityResult = await allCitiesAction();
        if (cityResult?.data) {
          const formattedCities = cityResult.data.map((c) => ({
            value: c.name, // unique id
            label: c.name, // display name
          }));
          setApiCitiesList(formattedCities);
        }

        // fetch cities
        const LocationResult = await allLocationAction();
        if (LocationResult?.data) {
          const formattedCities = LocationResult.data.map((c) => ({
            value: c.name, // unique id
            label: c.name, // display name
          }));
          setapiLocationList(formattedCities);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiDataContext.Provider
      value={{
        apiBuilderList,
        setapiBuilderList,
        apiCitiesList,
        setApiCitiesList,
        apiLocationList,
      }}
    >
      {children}
    </ApiDataContext.Provider>
  );
}

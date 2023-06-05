import React, { useEffect, useState } from "react";
import styles from "./catalog.css";
import ocean from "./ocean.jpeg";

interface CatalogItem {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Catalog() {
  const [dataFromDB, setDataFromDB] = useState<CatalogItem[]>([]);

  useEffect(() => {
    fetch("/api/db")
      .then((response: any) => response.json())
      .then((data: CatalogItem[]) => setDataFromDB(data))
      .catch((error: any) => console.error(error));
  }, []);

  dataFromDB.map((item) => console.log(item));

  return (
    <>
      <img src={ocean} style={{ width: "200px", height: "200px" }}></img>
    </>
  );
}

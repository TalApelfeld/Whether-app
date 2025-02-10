import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [dataFromUrl, setDataFromUrl] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setTimeout(() => {
        setDataFromUrl(data);
      }, 2000);
    }
    fetchData();
  }, []);

  return dataFromUrl;
}

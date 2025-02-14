import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface ItemListProps {
  filter: string;
}
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const ItemList: React.FC<ItemListProps> = ({ filter }) => {
  const [data, setData] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const result: Photo[] = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {filteredData.map((item) => (
        <CSSTransition key={item.id} timeout={300} classNames="fade">
          <div>{item.title}</div>
        </CSSTransition>
      ))}
    </div>
  );
};

export default ItemList;

import React, { Suspense, useState } from "react";

const ItemList = React.lazy(() => import("./components/ItemList"));
const MailForm = React.lazy(() => import("./components/MailForm"));

const App: React.FC = () => {
  const [filter, setFilter] = useState("");
  const [showItemList, setShowItemList] = useState(false);

  const handleClick = () => {
    setShowItemList(true);
  };

  return (
    <div>
      <Suspense fallback={<div>Loading Mail Form...</div>}>
        <MailForm />
        <MailForm />
        <MailForm />
      </Suspense>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items"
      />
      <button onClick={handleClick}>Load Items</button>{" "}
      {showItemList && (
        <Suspense fallback={<div>Loading Item List...</div>}>
          <ItemList filter={filter} />
        </Suspense>
      )}
    </div>
  );
};

export default App;

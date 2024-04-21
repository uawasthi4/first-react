import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b-2 border-gray-300 text-left"
          data-testid="restaurantItems"
          key={item.card.info.id}
        >
          <div className="flex justify-between">
            <div className="py-2 w-10/12">
              <span className="font-bold">{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-2/12">
              {" "}
              <div className="absolute">
                <button
                  className="px-10 mx-4 my-[92px] font-bold bg-green-50 text-green-800 shadow-lg rounded-md"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
              <img
                className="w-full h-28 rounded-lg"
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

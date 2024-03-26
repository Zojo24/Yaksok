import { CartItem } from "../types/\btypes";
import Button from "./Button";

interface CartProps {
  cartItems: CartItem[];
  onAddMap: () => void;
  onSelectItem: (item: CartItem, isSelected: boolean) => void;
  children?: React.ReactNode;
}

const Cart = ({ cartItems, onAddMap, onSelectItem, children }: CartProps) => {
  return (
    <div className="relative bg-white rounded-[5px]">
      <div className="absolute -left-10 top-[10%] transform -translate-y-1/2 rotate-90 w-0 h-0 border-x-[10px] border-x-darkGray border-x-transparent border-t-[20px] border-t-white"></div>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="bg-creme px-4 py-3 my-3 rounded-[5px] flex justify-between items-center"
          >
            <div>
              <p className="text-mdBold text-[0.87rem] text-center">
                {item.title.replace(/<[^>]*>?/gm, "")}
              </p>
              <p className="text-[0.8rem] text-center mb-2">{item.address}</p>
            </div>
            <input
              type="checkbox"
              onChange={(e) => onSelectItem(item, e.target.checked)}
              className="ml-4"
            />
          </li>
        ))}
      </ul>
      <Button
        variant="gray"
        size="sm"
        onClick={onAddMap}
        className="cursor-pointer flex w-full justify-center mb-2"
      >
        지도에 등록
      </Button>
      {children}
    </div>
  );
};

export default Cart;

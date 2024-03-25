import { CartItem } from "../types/\btypes";

interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {
  return (
    <div className="relative bg-white rounded-[5px]">
      <div className="absolute -left-10 top-[10%] transform -translate-y-1/2 rotate-90 w-0 h-0 border-x-[10px] border-x-darkGray border-x-transparent border-t-[20px] border-t-white"></div>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="bg-creme px-4 py-3 my-3 rounded-[5px] flex justify-center items-center"
          >
            <div>
              <p className="text-mdBold text-[0.87rem] text-center">
                {item.title.replace(/<[^>]*>?/gm, "")}
              </p>
              <p className="text-[0.8rem] text-center mb-2">{item.address}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

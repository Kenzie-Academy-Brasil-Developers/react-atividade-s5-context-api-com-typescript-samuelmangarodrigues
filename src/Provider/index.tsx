import { CartProvider } from "./Cart";
import { ReactNode } from "react";
interface ProvidersProp {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProp) => {
  return <CartProvider>{children}</CartProvider>;
};
export default Providers;

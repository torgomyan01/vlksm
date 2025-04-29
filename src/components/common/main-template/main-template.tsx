import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import React from "react";
import Navbar from "@/components/common/navbar/navbar";

interface IThisProps {
  children: React.ReactNode;
}

function MainTemplate({ children }: IThisProps) {
  return (
    <Provider store={store}>
      <HeroUIProvider>
        <ToastProvider />

        <div className="w-full ">
          <Navbar />
          {children}
        </div>
      </HeroUIProvider>
    </Provider>
  );
}

export default MainTemplate;

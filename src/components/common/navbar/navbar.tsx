import Link from "next/link";
import { SITE_URL } from "@/utils/consts";
import Image from "next/image";
import logo from "@/access/image/logo.svg";
import { Button } from "@heroui/react";
import React, { useState } from "react";
import ModalLogin from "@/components/common/modals/modal-login";

function Navbar() {
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <>
      <nav className="border-b h-[58px] flex-jsb-c px-[20px]">
        <div className="w-[286px]">
          <Link href={SITE_URL.HOME}>
            <Image src={logo} alt="logo" width={70} height={18} />
          </Link>
        </div>
        <div className="w-[calc(100%_-_284px)] h-full flex-jsb-c">
          <div className="flex-js-c h-full gap-[30px] mt-[1px]">
            <Link href="/" className="border-b border-black h-full flex-jc-c">
              Каталог
            </Link>
            <Link href="/" className="flex-js-c gap-[10px]">
              КП{" "}
              <div className="bg-[#1AB1BA1A] flex-jc-c px-2 rounded-full text-[15px]">
                №14
                <span className="block w-[3px] h-[3px] bg-[#1AB1BA] mx-[7px] rounded-full"></span>
                ООО «СуперПром»
                <span className="block w-[3px] h-[3px] bg-[#1AB1BA] mx-[7px] rounded-full"></span>
                123 204 ₽
              </div>
            </Link>
            <Link href="/">Заказы</Link>
          </div>
          <div className="flex-je-c gap-2 cursor-pointer">
            <Button
              size="sm"
              className="bg-blue text-white text-[15px] font-bold h-[32px]"
              onPress={() => setModalLogin(true)}
            >
              Войти
            </Button>
            {/*<Avatar*/}
            {/*  size="sm"*/}
            {/*  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"*/}
            {/*/>*/}
            {/*Андрей Степанов*/}
          </div>
        </div>
      </nav>
      <ModalLogin status={modalLogin} onClose={() => setModalLogin(false)} />
    </>
  );
}

export default Navbar;

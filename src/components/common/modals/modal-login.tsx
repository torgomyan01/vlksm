import { addToast, Button, ModalContent } from "@heroui/react";
import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "@heroui/modal";
import { Input } from "@heroui/input";
import Link from "next/link";
import { UserLogin } from "@/utils/api";
import { localStorageKeys } from "@/utils/consts";

const defInput = {
  value: "",
  error: false,
};

interface IThisProps {
  status: boolean;
  onClose: () => void;
}

function ModalLogin({ status, onClose }: IThisProps) {
  const [step, setStep] = useState(1);
  const [login, setLogin] = useState(defInput);
  const [password, setPassword] = useState(defInput);
  const [loading, setLoading] = useState(false);

  function NextStepOne() {
    if (!login.value) {
      setLogin({
        value: "",
        error: true,
      });
      setPassword(defInput);
    } else {
      setStep(2);
    }
  }

  function NextStepOPassword() {
    if (!password.value) {
      setPassword({
        value: "",
        error: true,
      });
    } else {
      ULogin();
    }
  }

  function ULogin() {
    if (login.value && password.value) {
      setLoading(true);
      UserLogin(login.value, password.value)
        .then(({ data }) => {
          setLoading(false);

          localStorage.setItem(localStorageKeys.accessToken, data.access);
          localStorage.setItem(localStorageKeys.refreshToken, data.refresh);
        })
        .catch((error) => {
          addToast({
            title: error.response.data.detail,
            color: "danger",
          });
          setLoading(false);
        });
    }
  }

  return (
    <Modal isOpen={status} size="lg" onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex-js-s flex-col gap-1">
          {step > 1 ? (
            <Button
              size="sm"
              className="rounded-[6px] flex-js-s font-bold text-[13px]"
              onPress={() => setStep(step - 1)}
            >
              <i className="fa-regular fa-chevron-left mr-1 text-[13px]" />
              {step !== 3 ? "Вход" : "Введите пароль"}
            </Button>
          ) : (
            "Вход"
          )}
        </ModalHeader>
        <ModalBody>
          <div className="mb-1">
            {step === 1 && (
              <>
                <div className="w-full mb-3">
                  <Input
                    label="Логин или e-mail"
                    type="text"
                    value={login.value}
                    onChange={(e) =>
                      setLogin({
                        value: e.target.value,
                        error: false,
                      })
                    }
                    errorMessage="Поля необходимо заполнить"
                    isInvalid={login.error}
                  />
                </div>
                <Button
                  size="sm"
                  className="bg-blue text-white text-[15px] font-bold w-[124px] h-[32px]"
                  onPress={NextStepOne}
                >
                  Продолжить
                </Button>
                <p className="text-[13px] text-black/70 mt-3">
                  Чтобы зарегистрироваться в системе обратитесь на{" "}
                  <Link href="mailto:signup@cems.ru" className="underline">
                    signup@cems.ru
                  </Link>{" "}
                  или по телефону{" "}
                  <Link href="tel:+7 8 800 123 45 67" className="font-bold">
                    8 800 123 45 67
                  </Link>
                </p>
              </>
            )}
            {step === 2 && (
              <>
                <h2 className="text-[22px] font-bold mb-[2px]">
                  Введите пароль
                </h2>
                <p className="text-[15px] mb-[10px]">
                  Вход в аккаунт {login.value}
                </p>
                <div className="w-full mb-3">
                  <Input
                    label="Пароль"
                    type="password"
                    value={password.value}
                    onChange={(e) =>
                      setPassword({
                        value: e.target.value,
                        error: false,
                      })
                    }
                    errorMessage="Поля необходимо заполнить"
                    isInvalid={password.error}
                  />
                </div>
                <Button
                  size="sm"
                  onPress={NextStepOPassword}
                  isLoading={loading}
                  className="bg-blue text-white text-[15px] font-bold h-[32px]"
                >
                  Войти
                </Button>
                <div className="mt-[10px] mb-2">
                  <span
                    className="text-black/70 cursor-pointer"
                    onClick={() => setStep(3)}
                  >
                    Забыли пароль?
                  </span>
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <h2 className="text-[22px] font-bold mb-[2px]">
                  Восстановление пароля
                </h2>
                <p className="text-[15px] mb-[10px]">
                  На {login.value} будет отправлено письмо со ссылкой для
                  восстановления пароля.
                </p>
                <Button
                  size="sm"
                  className="bg-blue text-white text-[15px] font-bold h-[32px] mb-2"
                >
                  Отправить ссылку
                </Button>
              </>
            )}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default ModalLogin;

import { useRef } from "react";
import type { UserInterface } from "../types/User.interface";

const UncontrolledForm = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser: UserInterface = {
      id: Date.now(),
      fullName: fullNameRef.current?.value || "",
      birthDate: birthDateRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      email: emailRef.current?.value || "",
    };

    console.log("Добавлен пользователь:", newUser);

    // Очистка полей формы
    if (fullNameRef.current) fullNameRef.current.value = "";
    if (birthDateRef.current) birthDateRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Неконтролируемая форма</h2>

      <div>
        <label htmlFor="fullName">ФИО</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          ref={fullNameRef}
          placeholder="Введите ФИО"
          required
        />
      </div>

      <div>
        <label htmlFor="birthDate">Дата рождения</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          ref={birthDateRef}
          required
        />
      </div>

      <div>
        <label htmlFor="phone">Номер телефона</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          ref={phoneRef}
          placeholder="+38 (___) ___-__-__"
          required
          pattern="^\+?[0-9\s\-\(\)]{7,20}$"
        />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          placeholder="Введите email"
          required
        />
      </div>

      <button type="submit">Сохранить</button>
    </form>
  );
};

export default UncontrolledForm;

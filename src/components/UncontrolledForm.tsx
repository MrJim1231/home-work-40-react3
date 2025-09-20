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

    // Очистка полей
    if (fullNameRef.current) fullNameRef.current.value = "";
    if (birthDateRef.current) birthDateRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Не контролируемая форма</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              ФИО
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              ref={fullNameRef}
              className="form-control"
              placeholder="Введите ФИО"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="birthDate" className="form-label">
              Дата рождения
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              ref={birthDateRef}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              ref={phoneRef}
              className="form-control"
              placeholder="+38 (___) ___-__-__"
              required
              pattern="^\+?[0-9\s\-\(\)]{7,20}$"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              className="form-control"
              placeholder="Введите email"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default UncontrolledForm;

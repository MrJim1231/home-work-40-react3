import { useRef } from "react";
import type { FormInterface } from "../types/Form.interface";

const UncontrolledForm = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneValue = phoneRef.current?.value || "";

    // Проверка: номер должен начинаться с + и быть не короче 10 цифр
    const phonePattern = /^\+\d{10,}$/;
    if (!phonePattern.test(phoneValue)) {
      alert("Введите номер телефона в формате +38XXXXXXXXXX");
      return;
    }

    const newUser: FormInterface = {
      id: Date.now(),
      fullName: fullNameRef.current?.value || "",
      birthDate: birthDateRef.current?.value || "",
      phone: phoneValue,
      email: emailRef.current?.value || "",
    };

    alert(
      `Добавлен пользователь:\n\nФИО: ${newUser.fullName}\nДата рождения: ${newUser.birthDate}\nТелефон: ${newUser.phone}\nEmail: ${newUser.email}`
    );

    // Очистка полей
    if (fullNameRef.current) fullNameRef.current.value = "";
    if (birthDateRef.current) birthDateRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!phoneRef.current) return;

    let value = e.target.value;

    // Оставляем только цифры и плюс
    value = value.replace(/[^\d+]/g, "");

    // Автоматически добавляем + в начале
    if (value && !value.startsWith("+")) {
      value = "+" + value;
    }

    phoneRef.current.value = value;
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
              placeholder="+38XXXXXXXXXX"
              required
              onChange={handlePhoneChange}
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

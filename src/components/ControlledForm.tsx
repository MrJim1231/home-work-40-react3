import { useState } from "react";
import type { UserInterface } from "../types/User.interface";

const ControlledForm = () => {
  const [formData, setFormData] = useState<Omit<UserInterface, "id">>({
    fullName: "",
    birthDate: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Оставляем только цифры и плюс
      const filtered = value.replace(/[^\d+]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: filtered,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка: номер должен начинаться с + и быть не короче 10 цифр
    const phonePattern = /^\+\d{10,}$/;
    if (!phonePattern.test(formData.phone)) {
      alert("Введите номер телефона в формате +38XXXXXXXXXX");
      return;
    }

    const newUser: UserInterface = {
      id: Date.now(),
      ...formData,
    };

    alert(
      `Добавлен пользователь:\n\nФИО: ${newUser.fullName}\nДата рождения: ${newUser.birthDate}\nТелефон: ${newUser.phone}\nEmail: ${newUser.email}`
    );

    setFormData({
      fullName: "",
      birthDate: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Контролируемая форма</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              ФИО
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
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
              className="form-control"
              value={formData.birthDate}
              onChange={handleChange}
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
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+38XXXXXXXXXX"
              required
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
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите email"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ControlledForm;

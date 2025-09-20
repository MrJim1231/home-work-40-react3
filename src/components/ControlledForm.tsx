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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Создаём нового пользователя с уникальным id
    const newUser: UserInterface = {
      id: Date.now(),
      ...formData,
    };

    console.log("Добавлен пользователь:", newUser);

    // Очистим форму
    setFormData({
      fullName: "",
      birthDate: "",
      phone: "",
      email: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Контролируемая форма</h2>

        <div>
          <label htmlFor="fullName">ФИО</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
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
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Номер телефона</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            placeholder="Введите email"
            required
          />
        </div>

        <button type="submit">Сохранить</button>
      </form>
    </>
  );
};

export default ControlledForm;

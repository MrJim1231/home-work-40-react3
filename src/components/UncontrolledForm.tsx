import { useRef } from "react";

const UncontrolledForm = () => {
  const fullNameRef = useRef(null);
  const birthDateRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      fullName: fullNameRef.current.value,
      birthDate: birthDateRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
    };

    console.log("Добавлен пользователь:", userData);

    // Очистим поля формы вручную
    fullNameRef.current.value = "";
    birthDateRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Не контролируемая форма</h2>

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
    </>
  );
};

export default UncontrolledForm;

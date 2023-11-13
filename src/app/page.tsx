'use client';

import { useState, FormEvent } from 'react';
import Modal from './components/Modal/index';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const { push } = useRouter();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(emailValue, passwordValue);

    push(`/clients`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={openModal}>Войти в админ-панель</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div onClick={handleOverlayClick}>
            <h1 className="flex justify-center mb-2">Авторизация</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col rounded-lg justify-center">
              <input
                name="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                type="text"
                placeholder="Введите email"
                className="w-full p-2 m-2 ml-0 rounded-md"></input>
              <input
                name="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                type="text"
                placeholder="Введите пароль"
                className="w-full p-2 m-2 ml-0 rounded-md"></input>
              <button
                type="submit"
                className="flex justify-center w-full m-2 p-2 ml-0 rounded-md bg-orange-500">
                Войти
              </button>
            </form>
          </div>
        </Modal>
      )}
    </main>
  );
}

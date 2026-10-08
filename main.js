document.addEventListener('DOMContentLoaded', () => {
  // Находим элементы
  const modal = document.getElementById('orderModal');
  const openBtn = document.querySelector('.js-open-modal');
  const closeBtn = document.querySelector('.js-close-modal');

  if (modal && openBtn) {
    // Открытие модалки
    openBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Если кнопка внутри формы или ссылка
      modal.classList.add('modal--active');
      document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    });

    // Закрытие по крестику
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
      });
    }

    // Закрытие по клику вне окна (по оверлею)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    });

    // Закрытие по клавише Esc (хороший тон для доступности)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
      }
    });
  }
});
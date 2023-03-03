// - Реалізуйте записну книгу, яка зберігає дані у локальному сховищі.
//     Дані які потрібно зберігати: ПІБ, номер, пошта, фірма, відділ, день народження
// Дані вводити через форму.
// --Кожному контакту додати кнопку для видалення контакту.
// --Кожному контакту додати кнопку редагування. При натисканні на неї з'являється форма, в якій є всі необхідні інпути для редагування, які вже заповнені даними об'єкта

const form = document.forms.creator;

form.onsubmit = function(e) {
  e.preventDefault();

  const wrapper = document.createElement('div');
  const name = document.createElement('div');
  const surname = document.createElement('div');
  const phone = document.createElement('div');
  const email = document.createElement('div');
  const company = document.createElement('div');
  const department = document.createElement('div');
  const birthday = document.createElement('div');

  name.innerText = `Name: ${this.name.value}`;
  surname.innerText = `Surname: ${this.surname.value}`;
  phone.innerText = `Phone: ${this.phone.value}`;
  email.innerText = `Email: ${this.email.value}`;
  company.innerText = `Company: ${this.company.value}`;
  department.innerText = `Department: ${this.department.value}`;
  birthday.innerText = `Birthday: ${this.birthday.value}`;

  wrapper.classList.add('wrapper', 'item');

  wrapper.append(name, surname, phone, email, company, department, birthday);
  document.body.appendChild(wrapper);
}

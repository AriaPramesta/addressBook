const contacts = [
  {
    id: 1,
    fullName: "Aria Adi Pramesta",
    email: "pramesta@gmail.com",
    phone: "62893145367908",
  },
  {
    id: 2,
    fullName: "Oliver Sykes",
    email: "olisykes@gmail.com",
    phone: "628123476801",
  },
  {
    id: 3,
    fullName: "Elon Musk",
    email: "elon@gmail.com",
    phone: "6298345432109",
  },
];

function renderContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(
      `${contact.id}. ${contact.fullName} ${contact.email} (${contact.phone})`
    );
  }
}

function addContacts(fullName, email, phone) {
  const lastId = contacts[contacts.length - 1].id;

  contacts.push({ id: lastId + 1, fullName, email, phone });

  renderContacts();
}

renderContacts();
addContacts("Jeff Bezos", "jef@gmail.com", "628908428935");
addContacts("Mark Zuckerberg", "mark@gmail.com", "6281344987601");

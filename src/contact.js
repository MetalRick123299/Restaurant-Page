function loadContact() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "Contact");
  contact.classList.add("Contact");

  const ContactArr = [
    [
      "Contact Us Here:",
      ["Email: FakeEmail@NotReal.com", "Phone: 123-456-7890"],
    ],
    [
      "Hours",
      [
        "Monday: 12:00 - 22:00",
        "Tuesday: 12:00 - 22:00",
        "Wednesday: 12:00 - 22:00",
        "Thursday: 12:00 - 22:00",
        "Friday: 12:00 - 23:00",
        "Saturday: 12:00 - 23:00",
        "Sunday: 12:00 - 23:00",
      ],
    ],
    ["Address", ["123 Fake Street Vancouver, BC V06 0E1"]],
  ];

  for (let i = 0; i < 3; i++) {
    const col = document.createElement("div");
    col.classList.add("col");

    const h2 = document.createElement("h2");
    h2.textContent = ContactArr[i][0];
    col.appendChild(h2);

    ContactArr[i][1].forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      col.appendChild(li);
    });

    contact.appendChild(col);
  }

  return contact;
}

export default loadContact;

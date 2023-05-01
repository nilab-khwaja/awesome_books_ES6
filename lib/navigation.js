export const list = document.getElementById('list');
export const addNew = document.getElementById('add-new');
export const contact = document.getElementById('contact');
export const listSection = document.getElementById('list-section');
export const addSection = document.getElementById('add-section');
export const contactSection = document.getElementById('contact-section');

export function setupNavigation() {
  list.addEventListener('click', () => {
    listSection.style.display = 'flex';
    addSection.style.display = 'none';
    contactSection.style.display = 'none';
  });

  addNew.addEventListener('click', () => {
    listSection.style.display = 'none';
    addSection.style.display = 'flex';
    contactSection.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    listSection.style.display = 'none';
    addSection.style.display = 'none';
    contactSection.style.display = 'flex';
  });
}
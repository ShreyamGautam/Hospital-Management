const form = document.getElementById('patientForm');
const list = document.getElementById('patientList');
const searchResults = document.getElementById('searchResults');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const patient = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    gender: document.getElementById('gender').value,
    contact: document.getElementById('contact').value,
  };

  await fetch('http://localhost:5000/api/patients', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patient),
  });

  form.reset();
  loadPatients();
});

async function loadPatients() {
  const res = await fetch('http://localhost:5000/api/patients');
  const data = await res.json();
  list.innerHTML = '';
  data.forEach(p => {
    const item = document.createElement('li');
    item.innerHTML = `
      <b>${p.name}</b> (${p.age}, ${p.gender}) - ${p.contact}
      <button onclick="deletePatient('${p._id}')">Delete</button>
    `;
    list.appendChild(item);
  });
}

async function deletePatient(id) {
  await fetch(http://localhost:5000/api/patients/${id}, {
    method: 'DELETE',
  });
  loadPatients();
}

async function searchPatient() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const res = await fetch('http://localhost:5000/api/patients');
  const data = await res.json();

  searchResults.innerHTML = '';
  const results = data.filter(p => p.name.toLowerCase().includes(query));
  results.forEach(p => {
    const item = document.createElement('li');
    item.textContent = ${p.name} (${p.age}, ${p.gender}) - ${p.contact};
    searchResults.appendChild(item);
  });
}

loadPatients();
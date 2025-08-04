// Dropdown Profile Menu
const profilePic = document.getElementById('profile-pic');
const profileDropdown = document.getElementById('profile-dropdown');

profilePic.addEventListener('click', () => {
  profileDropdown.style.display = 
    profileDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
  if (!profilePic.contains(e.target) && !profileDropdown.contains(e.target)) {
    profileDropdown.style.display = 'none';
  }
});

const jobs = [
  {
    title: "Admin IT",
    company: "PT. Yakult Indonesia Persada",
    location: "Jakarta Selatan, Jakarta Raya",
    time: "20 hari yang lalu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Yakult_logo.png"
  },
  {
    title: "IT Support",
    company: "PT Novus Hotel Manajemen",
    location: "Jakarta Barat, Jakarta Raya",
    time: "4 hari yang lalu",
    badge: "Baru untuk kamu",
    logo: "https://via.placeholder.com/40"
  }
];

const savedJobs = [
  {
    title: "Onsite NOC / Onsite Network Engineer",
    company: "PT Asia Teknologi Solusi",
    location: "Jakarta Raya",
    salary: "IDR 5,500,000 - 7,700,000",
    time: "30+ hari yang lalu",
    status: "Berakhir",
    logo: "https://via.placeholder.com/35"
  },
  {
    title: "Teknisi Jaringan Internet Wireless",
    company: "PT Asia Teknologi Solusi",
    location: "Jakarta Raya",
    salary: "IDR 4,500,000 - 6,000,000",
    time: "15 hari yang lalu",
    status: "",
    logo: "https://via.placeholder.com/35"
  }
];

const jobList = document.getElementById('job-list');
const savedJobsList = document.getElementById('saved-jobs');
const addJobBtn = document.getElementById('add-job-btn');
const toggleFormBtn = document.getElementById('toggle-form-btn');
const addJobForm = document.getElementById('add-job-form');

function renderJobs() {
  jobList.innerHTML = "";
  jobs.forEach(job => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card');
    jobCard.innerHTML = `
      <div class="job-info">
        <div class="job-title">${job.title}</div>
        <div class="company">${job.company}</div>
        <div class="location">${job.location}</div>
        <div class="time">${job.time}</div>
        ${job.badge ? `<div class="badge ${job.badge.includes('Baru') ? 'new-badge' : ''}">${job.badge}</div>` : ""}
      </div>
      <img src="${job.logo}" alt="logo">
    `;
    jobList.appendChild(jobCard);
  });
}

function renderSavedJobs() {
  savedJobsList.innerHTML = "";
  savedJobs.forEach(job => {
    const savedCard = document.createElement('div');
    savedCard.classList.add('saved-job');
    savedCard.innerHTML = `
      <div>
        <div class="job-title">${job.title}</div>
        <div class="company">${job.company}</div>
        <div class="location">${job.location}</div>
        <div class="salary">${job.salary}</div>
        <div class="time">${job.time}</div>
        ${job.status ? `<div class="expired">${job.status}</div>` : ""}
      </div>
      <img src="${job.logo}" alt="logo">
    `;
    savedJobsList.appendChild(savedCard);
  });
}

addJobBtn.addEventListener('click', () => {
  const title = document.getElementById('job-title').value;
  const company = document.getElementById('job-company').value;
  const location = document.getElementById('job-location').value;
  const time = document.getElementById('job-time').value;
  const badge = document.getElementById('job-badge').value;
  const logo = document.getElementById('job-logo').value;

  if (title && company && location && time && logo) {
    jobs.push({ title, company, location, time, badge, logo });
    renderJobs();

    document.getElementById('job-title').value = "";
    document.getElementById('job-company').value = "";
    document.getElementById('job-location').value = "";
    document.getElementById('job-time').value = "";
    document.getElementById('job-badge').value = "";
    document.getElementById('job-logo').value = "";
  } else {
    alert("Mohon isi semua data kecuali badge (opsional).");
  }
});

toggleFormBtn.addEventListener('click', () => {
  if (addJobForm.style.display === "none") {
    addJobForm.style.display = "block";
    toggleFormBtn.textContent = "− Sembunyikan Form";
  } else {
    addJobForm.style.display = "none";
    toggleFormBtn.textContent = "+ Tambah Job";
  }
});

renderJobs();
renderSavedJobs();

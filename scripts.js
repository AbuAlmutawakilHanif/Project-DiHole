 function showForm(form) {
      document.querySelectorAll('.form-section').forEach(f => f.classList.remove('active'));
      document.getElementById(form + '-form').classList.add('active');
    }

    function togglePassword(id) {
      const input = document.getElementById(id);
      input.type = input.type === 'password' ? 'text' : 'password';
    }

    function sendCode() {
      alert('Code sent!');
    }

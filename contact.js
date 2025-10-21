document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const fullName = document.getElementById('fullName');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const successMessage = document.getElementById('successMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateName() {
    const value = fullName.value.trim();
    if (value === '') {
      showError(fullName, nameError, 'Full name is required');
      return false;
    }
    clearError(fullName, nameError);
    return true;
  }

  function validateEmail() {
    const value = email.value.trim();
    if (value === '') {
      showError(email, emailError, 'Email address is required');
      return false;
    }
    if (!emailRegex.test(value)) {
      showError(email, emailError, 'Please enter a valid email address');
      return false;
    }
    clearError(email, emailError);
    return true;
  }

  function validateSubject() {
    const value = subject.value.trim();
    if (value === '') {
      showError(subject, subjectError, 'Subject is required');
      return false;
    }
    clearError(subject, subjectError);
    return true;
  }

  function validateMessage() {
    const value = message.value.trim();
    if (value === '') {
      showError(message, messageError, 'Message is required');
      return false;
    }
    if (value.length < 10) {
      showError(message, messageError, 'Message must be at least 10 characters long');
      return false;
    }
    clearError(message, messageError);
    return true;
  }

  function showError(input, errorElement, errorMessage) {
    input.classList.add('invalid');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('visible');
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input, errorElement) {
    input.classList.remove('invalid');
    errorElement.textContent = '';
    errorElement.classList.remove('visible');
    input.setAttribute('aria-invalid', 'false');
  }

  fullName.addEventListener('blur', validateName);
  email.addEventListener('blur', validateEmail);
  subject.addEventListener('blur', validateSubject);
  message.addEventListener('blur', validateMessage);

  fullName.addEventListener('input', function() {
    if (fullName.classList.contains('invalid')) {
      validateName();
    }
  });

  email.addEventListener('input', function() {
    if (email.classList.contains('invalid')) {
      validateEmail();
    }
  });

  subject.addEventListener('input', function() {
    if (subject.classList.contains('invalid')) {
      validateSubject();
    }
  });

  message.addEventListener('input', function() {
    if (message.classList.contains('invalid')) {
      validateMessage();
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    successMessage.classList.remove('visible');

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      successMessage.classList.add('visible');

      form.reset();

      clearError(fullName, nameError);
      clearError(email, emailError);
      clearError(subject, subjectError);
      clearError(message, messageError);

      successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      successMessage.focus();
    } else {
      if (!isNameValid) {
        fullName.focus();
      } else if (!isEmailValid) {
        email.focus();
      } else if (!isSubjectValid) {
        subject.focus();
      } else if (!isMessageValid) {
        message.focus();
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.work-together-contact-form');
  const emailInput = document.getElementById('email');
  const commentInput = document.getElementById('user-comment');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('modal-close');

  if (!form || !emailInput || !commentInput || !modal || !closeModalBtn) {
    return;
  }

  form.addEventListener('submit', async event => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();

    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    if (!email || !comment) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please fill in all fields.',
      });
      return;
    }

    try {
      const response = await fetch('https://reqres.in/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, comment }),
      });

      if (response.ok) {
        emailInput.value = '';
        commentInput.value = '';
        modal.classList.add('modal-active');
      } else {
        iziToast.error({
          title: 'Error',
          message:
            'An error occurred. Please check your details and try again.',
        });
      }
    } catch (error) {
      iziToast.error({
        title: 'Server Error',
        message: 'Please try again later.',
      });
    }
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('modal-active');
  });

  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.remove('modal-active');
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modal.classList.remove('modal-active');
    }
  });

  const maxCommentLength = 50;

  commentInput.addEventListener('input', () => {
    if (commentInput.value.length > maxCommentLength) {
      commentInput.value =
        commentInput.value.substring(0, maxCommentLength) + '...';
    }
  });

  const formButtons = document.querySelectorAll('.work-together-btn');
  const formLinks = document.querySelectorAll(
    '.work-together-contact-link, .tel-link'
  );

  [...formButtons, ...formLinks].forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.classList.add('hovered');
    });

    element.addEventListener('mouseleave', () => {
      element.classList.remove('hovered');
    });

    element.addEventListener('focus', () => {
      element.classList.add('hovered');
    });

    element.addEventListener('blur', () => {
      element.classList.remove('hovered');
    });
  });
});

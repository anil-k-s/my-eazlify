const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.nav-links a')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, {rootMargin: '-25% 0px -65% 0px'});
sections.forEach(section => observer.observe(section));

// ===== Eazlify contact popup =====
(() => {
  const modal = document.getElementById("contactModal");
  const form = document.getElementById("eazlifyContactForm");

  if (!modal || !form) return;

  const closeButton = modal.querySelector(".contact-modal-close");
  const submitButton = document.getElementById("contactSubmitBtn");
  const status = document.getElementById("contactFormStatus");
  const nameInput = document.getElementById("contactName");

  let previousFocus = null;

  function openContactModal(event) {
    if (event) event.preventDefault();

    previousFocus = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("contact-modal-open");

    window.setTimeout(() => nameInput.focus(), 50);
  }

  function closeContactModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("contact-modal-open");

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  // Add data-open-contact to each button or link that opens the form.
  document.querySelectorAll("[data-open-contact]").forEach((trigger) => {
    trigger.addEventListener("click", openContactModal);
  });

  modal.querySelectorAll("[data-close-contact]").forEach((trigger) => {
    trigger.addEventListener("click", closeContactModal);
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      modal.classList.contains("is-open")
    ) {
      closeContactModal();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    status.textContent = "";
    status.className = "contact-form-status";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message right now."
        );
      }

      status.textContent =
        "Thank you! Your message has been sent successfully. I'll get back to you soon.";
      status.classList.add("is-success");
      form.reset();

      // Leave the confirmation visible briefly before closing.
      window.setTimeout(() => {
        closeContactModal();
        status.textContent = "";
        status.className = "contact-form-status";
      }, 2500);
    } catch (error) {
      status.textContent =
        error.message ||
        "Something went wrong. Please try again or email anilsisodiya@gmail.com.";
      status.classList.add("is-error");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
})();

function handleSimpleForm(formId, messageId, messageText) {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);

  if (!form || !message) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    form.reset();
    message.textContent = messageText;
  });
}

const pledgeForm = document.getElementById("pledgeForm");

if (pledgeForm) {
  pledgeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = pledgeForm.querySelector('[name="name"]').value.trim().split(" ")[0] || "Friend";
    pledgeForm.reset();
    const success = document.getElementById("success");
    success.innerHTML = "🎉 Welcome, " + name + "! Your pledge is confirmed. We'll be in touch with your digital badge and details about our next swap event. Thank you for joining the Rewear Revolution!";
    pledgeForm.style.display = "none";
  });
}

handleSimpleForm("contactForm", "contactSuccess", "Thanks for reaching out. We will reply soon.");

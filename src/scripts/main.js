import "../stylesheets/normalize.css";
import "../stylesheets/typography.css";
import "../stylesheets/variables.css";
import "../stylesheets/main.css";

const app = () => {
  const init = () => {
    addListeners();
  };

  const addListeners = () => {
    let form = document.querySelector(".form");
    let mail = document.querySelector("#mail");
    let country = document.querySelector("#country");
    let zip = document.querySelector("#zip");
    let password = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#password-confirm");

    mail.addEventListener("change", testMail);
    country.addEventListener("change", testCountry);
    zip.addEventListener("change", testZip);
    password.addEventListener("change", testPassword);
    passwordConfirm.addEventListener("change", testPasswordConfirm);

    mail.addEventListener("input", testMail);
    country.addEventListener("input", testCountry);
    zip.addEventListener("input", testZip);
    password.addEventListener("input", testPassword);
    passwordConfirm.addEventListener("input", testPasswordConfirm);

    form.addEventListener("submit", validate);
  };

  const testMail = (event) => {
    const email = event.target;
    email.setCustomValidity("");
    const isValid = email.checkValidity();
    if (isValid) {
      const validMailRgx = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "i"
      );
      if (!validMailRgx.test(email.value)) {
        email.setCustomValidity("This is not a valid e-mail address.");
        email.reportValidity();
      }
    }
  };

  const testCountry = (event) => {
    const country = event.target;
    country.setCustomValidity("");
    const isValid = country.checkValidity();
    if (isValid) {
      const validCountryRgx = new RegExp(/^[a-z]+$/, "i");
      if (!validCountryRgx.test(country.value)) {
        country.setCustomValidity("This is not a valid country name.");
        country.reportValidity();
      }
    }
  };

  const testZip = (event) => {
    const zip = event.target;
    zip.setCustomValidity("");
    const isValid = !zip.validity.tooShort;
    if (isValid) {
      const validZipRgx = new RegExp(/^\d{1,10}-*\d{1,10}$/);
      if (!validZipRgx.test(zip.value)) {
        zip.setCustomValidity("This is not a valid ZIP code.");
        zip.reportValidity();
      }
    }
  };

  const testPassword = (event) => {
    const password = event.target;
    password.setCustomValidity("");
    const isValid = !password.validity.tooShort;
    if (!isValid) {
      password.reportValidity();
    }
  };

  const testPasswordConfirm = (event) => {
    const passwordConfirm = event.target;
    let password = document.querySelector("#password").value;
    passwordConfirm.setCustomValidity("");
    const isValid = !passwordConfirm.validity.tooShort;
    if (isValid) {
      if (password !== passwordConfirm.value.trim()) {
        passwordConfirm.setCustomValidity("The passwords don't match.");
        passwordConfirm.reportValidity();
      }
    }
  };

  const validate = (event) => {
    event.preventDefault();
    event.target.reportValidity();
  };

  return {
    init: init,
  };
};

document.addEventListener("DOMContentLoaded", app().init);

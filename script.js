(() => {
  const langButton = document.getElementById("languageToggle");
  const menuButton = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  function setLanguage(language) {
    const isEnglish = language === "en";
    document.documentElement.lang = language;
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
    document.body.setAttribute("lang", language);
    document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
      element.innerHTML = isEnglish ? element.dataset.en : element.dataset.ar;
    });
    langButton.textContent = isEnglish ? "عربي" : "EN";
    langButton.setAttribute("aria-label", isEnglish ? "Switch to Arabic" : "Switch to English");
    document.title = isEnglish
      ? "Minya International Theatre Festival | MITF"
      : "مهرجان المنيا المسرحي الدولي | MITF";
    document.querySelector('meta[name="description"]').content = isEnglish
      ? "The official website of Minya International Theatre Festival MITF. Discover the festival and its archive."
      : "الموقع الرسمي لمهرجان المنيا المسرحي الدولي MITF. اكتشف المهرجان وأرشيف دوراته وأخباره.";
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  langButton.addEventListener("click", () => {
    setLanguage(document.documentElement.lang === "ar" ? "en" : "ar");
  });

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
})();

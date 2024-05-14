   // noflash.js
   (function() {
    var classNameDark = 'dark-mode';
    var classNameLight = 'light-mode';
    var storageKey = 'darkMode';
    var darkModeStored = localStorage.getItem(storageKey);

    if (darkModeStored === 'true') {
      document.body.classList.add(classNameDark);
    } else if (darkModeStored === 'false') {
      document.body.classList.add(classNameLight);
    }
  })();
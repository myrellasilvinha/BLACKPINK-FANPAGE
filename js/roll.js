const radios = document.querySelectorAll('input[name="slide"]');
  let current = 0;

  document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % radios.length; 
    radios[current].checked = true;
  });

  document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + radios.length) % radios.length; 
    radios[current].checked = true;
  });

(function(){
  function goBack(){
    // if there is a history, go back, else go to index
    if (history.length > 1) history.back();
    else location.href = "./index.html";
  }

  document.addEventListener("click", (e)=>{
    const back = e.target.closest("[data-back]");
    if(back){
      e.preventDefault();
      goBack();
    }
  });
})();

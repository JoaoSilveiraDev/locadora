class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  /////////////////////////////////////////////////////////////////////////////////////////////
  document.getElementById("botaoCadastro").addEventListener("click", ()=>{
    if(document.getElementById("senhaCadastro").value == document.getElementById("confirmacaoSenhaCadastro").value && 
    document.getElementById("nomeCadastro").value  != "" && 
    document.getElementById("emailCadastro").value != "" && 
    document.getElementById("senhaCadastro").value != "" &&
    document.getElementById("palavraChave").value != "" &&
    localStorage.getItem(0) != ""){
        localStorage.setItem(0, document.getElementById("nomeCadastro").value)
        localStorage.setItem(1, document.getElementById("emailCadastro").value)
        localStorage.setItem(2, document.getElementById("senhaCadastro").value)
        localStorage.setItem(3, document.getElementById("palavraChave").value)
        Swal.fire({
            title: 'Cadastro feito com sucesso!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocorreu algo de errado com seu cadastro! Caso já exista uma conta cadastrada, escreva a palavra chave anterior e clique em cadastrar para apagar a conta anterior',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
  })

  document.getElementById("botaoLogin").addEventListener("click", (event)=>{
    if(document.getElementById("emailLogin").value == localStorage.getItem(1) && document.getElementById("senhaLogin").value == localStorage.getItem(2)){
        return
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Seu login ou senha estão incorretos!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
         event.preventDefault()
     }
  })
  

  document.getElementById("redefinir").addEventListener("click", ()=>{
    if(localStorage.getItem(3)!="" && localStorage.getItem(3) == document.getElementById("palavraChave").value ){
        localStorage.clear()
        Swal.fire({
            title: 'Cadastro redefinido com sucesso!',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Para redefinir sua conta, digite a palavra chave da sua conta anterior e clique em redefinir!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
  })
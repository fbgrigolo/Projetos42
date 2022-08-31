import outsideClick from "./outsideclick.js";

export default class initMenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";

    // Define touchstart e click como argumento padrão
    // de events caso o usuário não defina
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } 
    else {
      this.events = events;
    }
 
    this.openMenu = this.openMenu.bind(this);
  }


  openMenu() {
    this.menuList.classList.toggle(this.activeClass);
    this.menuButton.classList.toggle(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) => this.menuButton.addEventListener(userEvent, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}

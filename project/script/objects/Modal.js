class Modal {
    static openModal(modalId) {
        let modal = document.getElementById(modalId);
        modal.style.display = "flex";
        modal.classList.add("shown--modal");
        let closeBtn = modal.getElementsByClassName("close-modal__btn")[0];

        closeBtn.onclick = function() {
            Modal.closeModal(modalId);
            modal.classList.remove("shown--modal");
        };
    }
    static closeModal(modalId) {
        let modal = document.getElementById(modalId);
        if (modalId == "modal--form-popup") {
            Modal.closePopupModal();
        } else {
            modal.style.display = "none";
        }
    }
    static closePopupModal() {
        let popModal = document.getElementById("modal--form-popup");
        popModal.style.top = "-100vh";
    }
    static hidePopupModal() {
        let popModal = document.getElementById("modal--form-popup");
        popModal.style.display = "none";
    }
    static openPopupModal_byWidth() {
        let windowWidth = window.innerWidth;
        if (windowWidth > 925) Modal.openModal("modal--form-popup");
    }

    static closeOrOpenPopupModal_ByScreenWidth() {
        let windowWidth = window.innerWidth;
        let modal = document.getElementById("modal--form-popup");
        if (windowWidth < 925) {
            Modal.closeModal("modal--form-popup");
        } else {
            if (modal.classList.contains("shown--modal"))
                Modal.openModal("modal--form-popup");
        }
    }
}
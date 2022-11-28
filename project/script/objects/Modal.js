const MODAL_funcs = {
    openModal(modalId) {
        let modal = document.getElementById(modalId);
        modal.style.display = "flex";
        modal.classList.add("shown--modal");
        let closeBtn = modal.getElementsByClassName("close-modal__btn")[0];

        closeBtn.onclick = function() {
            MODAL_funcs.closeModal(modalId);
            modal.classList.remove("shown--modal");
        };
    },
    closeModal(modalId) {
        let modal = document.getElementById(modalId);
        if (modalId == "modal--form-popup") {
            MODAL_funcs.closePopupModal();
        } else {
            modal.style.display = "none";
        }
    },
    closePopupModal() {
        let popModal = document.getElementById("modal--form-popup");
        popModal.style.top = "-100vh";
    },
    hidePopupModal() {
        let popModal = document.getElementById("modal--form-popup");
        popModal.style.display = "none";
    },
    openPopupModal_byWidth() {
        let windowWidth = window.innerWidth;
        if (windowWidth > 925) MODAL_funcs.openModal("modal--form-popup");
    },

    closeOrOpenPopupModal_ByScreenWidth() {
        let windowWidth = window.innerWidth;
        let modal = document.getElementById("modal--form-popup");
        if (windowWidth < 925) {
            MODAL_funcs.closeModal("modal--form-popup");
        } else {
            if (modal.classList.contains("shown--modal"))
                MODAL_funcs.openModal("modal--form-popup");
        }
    },
};
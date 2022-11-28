function main_setupQuestionLinks() {
    function openWorkQuestion() {
        const workQwst = document.getElementById("work-promise-question");
        const checkbox = workQwst.getElementsByTagName("input")[0];
        checkbox.checked = true;
    }
    const blockWithWorkQuestionLink =
        document.getElementsByClassName("pro-card__black")[0];
    const workQuestionLinks = blockWithWorkQuestionLink.getElementsByTagName("a");
    for (let link of workQuestionLinks) {
        link.onclick = openWorkQuestion;
    }
}

///////////////////
///////////////////
////////////////////
// FORM
/////////////
function setupPrivacyLinks(privacyModalLinks) {
    for (let link of privacyModalLinks) {
        link.onclick = function(e) {
            e.preventDefault();
            let modalId = e.target.getAttribute("name");
            MODAL_funcs.openModal(modalId);
        };
    }
}

///////////////

////////////////

function main_setupForm() {
    const MODAL = MODAL_funcs;
    const INPUTS = INPUT_verify;
    const forms = document.getElementsByTagName("form");

    for (let form of forms) {
        let inputs = form.getElementsByTagName("input");
        INPUTS.removeErrorClassFromInputs(inputs);

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const inputs = e.target.getElementsByTagName("input");
            let verified = INPUTS.verifyInputs(inputs);
            if (verified) {
                MODAL.closePopupModal();
                MODAL.openModal("modal--submitted");
            }
        });

        const privacyModalLinks = form.getElementsByTagName("a");
        setupPrivacyLinks(privacyModalLinks);
    }
}

function main_setupPopupModal() {
    window.addEventListener("load", MODAL_funcs.openPopupModal_byWidth);
    window.addEventListener(
        "resize",
        MODAL_funcs.closeOrOpenPopupModal_ByScreenWidth
    );
    setInterval(MODAL_funcs.openPopupModal_byWidth, 900000);
}
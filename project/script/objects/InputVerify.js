const INPUT_verify = {
    regex: {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        phone: /^0\d{9}$/,
        name: /^\w+[\w ]*/,
    },
    errMessage: {
        email: "*נא להזין אימייל",
        phone: "*נא להזין מספר טלפון",
        name: "*נא להזין שם תקין",
    },
    verifyInputs(inputs) {
        let regexVerified;
        let verifiedArray = [];
        for (let inp of inputs) {
            let type = inp.getAttribute("type");
            const REGEX_OPTIONS = INPUT_verify.regex;
            const ERR_MESSAGE_OPTIONS = INPUT_verify.errMessage;
            let regex;
            let placeholderErrText;
            let testThisInp = true;
            switch (type) {
                case "email":
                    regex = REGEX_OPTIONS.email;
                    placeholderErrText = ERR_MESSAGE_OPTIONS.email;

                    break;
                case "phone":
                    regex = REGEX_OPTIONS.phone;
                    placeholderErrText = ERR_MESSAGE_OPTIONS.phone;
                    break;
                case "text":
                    regex = REGEX_OPTIONS.name;
                    placeholderErrText = ERR_MESSAGE_OPTIONS.name;
                    break;
                default:
                    testThisInp = false;
            }
            if (testThisInp) {
                regexVerified = regex.test(inp.value);
                if (!regexVerified) {
                    console.log("err");
                    inp.classList.add("error--red");
                    INPUT_verify.clearInput(inp);
                    inp.setAttribute("placeholder", placeholderErrText);
                }
                verifiedArray.push(regexVerified);
            }
        }
        return verifiedArray.every((bool) => bool);
    },
    removeErrorClassFromInputs(inputs) {
        for (let inp of inputs) {
            inp.onchange = function(e) {
                e.target.classList.remove("error--red");
            };
        }
    },
    clearInput(inp) {
        inp.value = "";
    },
};
import { Responder } from "../dashboard/Responder";

export class ValidationService {
    private nameRegex = /^[a-zA-Z]+$/;
    private emailRegex = /\S+@\S+\.\S+/;
    private phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;

    constructor() {

    }

    validateName(name: string) {
        if(name.match(this.nameRegex)) {
            return true;
        }
        return false;
    }

    validateEmail(email: string) {
        if(email.match(this.emailRegex)) {
            return true;
        }
        return false;
    }

    validatePhone(phone: string) {
        if(phone.match(this.phoneRegex)) {
            return true;
        }
        return false;
    }

    validateConfirmPassword(password: string, confirmPassword: string) {
        if(password === confirmPassword) {
            return true;
        }
        return false;
    }
}
export class SystemAuth {
    static login(authenticable, password) {
        if(SystemAuth.isAuthenticable(authenticable)) {
            return authenticable.authenticate(password);
        }
        return false;
    }

    static isAuthenticable(authenticable) {
        return 'authenticate' in authenticable &&
            authenticable.authenticate instanceof Function;
    }
}
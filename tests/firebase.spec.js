import SignIn from "../src/components/layouts/signIn/signIn"

describe("sign in function", ()=>{
    let firebase;
    let signIn;
    beforeEach(() => {
        signIn = new SignIn();

        firebase = {
            auth: jasmine.createSpy('auth')
        }
    });
    it('should call firebase auth method', ()=>{
        signIn.loginUser();

        expect(firebase.auth).toHaveBeenCalled();
    })
});
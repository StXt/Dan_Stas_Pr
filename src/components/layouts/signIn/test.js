import SignIn from './signIn';

describe("test function", ()=>{
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
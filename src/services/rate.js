export class Rate {
    constructor(url) {
        this.url = url;
    }

    /*_promiseResp;

    get promiseRate() {
        return _promiseResp;
    }
    test = '';*/
    getRates() {
        /*let test = '';
        return fetch(this.url).then(
            resp => {
                test = 'toto';
                return _promiseResp = resp.json();
            }
        );*/
        return fetch(this.url).then(resp => resp.json());
    }

    /*checkResp(resp) {
        this.test = 'toto';
        return _promiseResp = resp.json();
    }*/
}
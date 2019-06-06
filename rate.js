export class Rate {
    constructor(url) {
        this.url = url;
    }

    getRates() {

        return fetch(this.url).then(resp => resp.json());

    }
}
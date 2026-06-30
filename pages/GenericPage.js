class GenericPage {

    constructor(page) {

        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return this.page.title();
    }
}

module.exports = {GenericPage};
export default class Range {
    constructor(n1, n2) {
        this.from = Math.min(n1, n2);
        this.to = Math.max(n1, n2);
    }
    length() {
        return this.to-this.from;
    }
}
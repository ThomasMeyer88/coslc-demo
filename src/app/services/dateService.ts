export class dateService {
    nowDate = new Date();
    days = [
        `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`
    ];
    weekDay = `${this.days[this.nowDate.getDay()]}`
    dateMDY = `${this.nowDate.getMonth()+1}/${this.nowDate.getDate()}/${this.nowDate.getFullYear()}`;
}
import moment from "moment";
import adBs from "ad-bs-converter"

const npDigit = (input: String) => {
    if (!input) return null;
    const DICT = {
        '0': '०',
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९'
    } as { [key: string]: string };
    let result = input.split('').map(char => DICT[char] || char).join('');
    return result;
}

const calcAge = (dob: string | null, dod: string | undefined) => {
    if (!dob) return null;

    let end = dod ? moment(dod, "YYYY-MM-DD") : moment();
    let start = moment(dob, "YYYY-MM-DD");
    let diff = end.diff(start, "years", false);
    return diff;
}

const lifespan = (dob: string, dod: string) => {
    let diff = moment(dod, "YYYY-MM-DD").diff(moment(dob, "YYYY-MM-DD"), "years", false);
    return diff;
}

const toBs = (date: string) => {
    let converted = adBs.ad2bs(date);
    if (converted && converted.ne) {
        return `${converted.ne.strMonth} ${converted.ne.month}, ${converted.ne.year}`
    }
    return date;
}

export { npDigit, calcAge, lifespan, toBs }
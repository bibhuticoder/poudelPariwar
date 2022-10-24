import moment from "moment";

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

const ageByDob = (dob: string) => {
    let diff = moment().diff(moment(dob, "YYYY/MM/DD"), "years", false);
    return diff;
}

export { npDigit, ageByDob }
import { GENDER } from "../enums";

export type Person = {
    id: string,
    name?: string,
    dob: string | null,
    age?: any,
    hasAccurateAge?: Boolean,
    dod?: string,
    gender?: GENDER,
    bio?: string | null,
}

export type TreeItem = {
    self?: Person,
    spouse?: Person[],
    innerHTML?: String,
    children?: Person[]
}
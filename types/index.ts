import { GENDER } from "../enums";

export type Person = {
    id: string,
    name: string,
    dob?: string,
    dod?: string | null,
    image?: string | null,
    gender?: GENDER,
    bio?: string | null,
}

export type TreeItem = {
    self: Person,
    spouse?: Person
    children?: Person[]
}
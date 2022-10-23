import { GENDER } from "../enums";

export type Person = {
    id: string,
    name?: string,
    dob?: string,
    age?: string,
    dod?: string | null,
    image?: string | null,
    gender?: GENDER,
    bio?: string | null,
}

export type TreeItem = {
    self: String,
    spouse?: String
    children?: String[]
}
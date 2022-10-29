import { Person, TreeItem } from "../types";
import { npDigit, ageByDob, lifespan } from "./index.utils";
import * as DOMPurify from 'dompurify';

const TRANSFORMS = {

    data: (person: Person): Person => {
        if (person.dob && !person.dod)
            person.age = npDigit(ageByDob(person.dob).toString()) + ' वर्ष';

        if (person.dob && person.dod) {
            let dob = npDigit(person.dob);
            let dod = npDigit(person.dod);

            // keep years only
            if (!person.hasAccurateAge) {
                dob = dob?.split('-').shift() as string;
                dod = dod?.split('-').shift() as string;
            }

            let age = npDigit(lifespan(person.dob, person.dod).toString()) + ' वर्ष'

            person.age = { lifespan: `${dob} - ${dod}`, age };
        }

        if (person.bio)
            person.bio = DOMPurify.sanitize(person.bio);
        else person.bio = "";

        return person;
    },

    treant: (item: TreeItem) => {
        // CONTAINER START
        let html = `<div class="person-group ${item.spouse && item.spouse.length ? '--married' : '--unmarried'}">`;

        const buildPerson = (person: Person) => {
            let html = `<div class="person" id="${person.id}">`;
            html += `<p class="name">${person.name}</p>`;
            html += `</div>`;
            return html;
        }

        // SELF + SPOUSEs
        if (item.self)
            html += buildPerson(item.self);
        if (item.spouse && item.spouse.length) {
            for (let i = 0; i < item.spouse.length; i++) {
                if (item.spouse[i]) html += buildPerson(item.spouse[i]);
            }
        }

        // CONTAINER END
        html += `</div>`;

        return html;
    }
}

const applyTransforms = (item: TreeItem) => {
    if (item.self)
        item.self = { ...TRANSFORMS.data(item.self) };
    if (item.spouse && item.spouse.length) {
        for (let i = 0; i < item.spouse.length; i++) {
            if (item.spouse[i]) item.spouse[i] = { ...TRANSFORMS.data(item.spouse[i]) };
        }
    }
    item.innerHTML = TRANSFORMS.treant(item);

    delete item.self;
    delete item.spouse;
}

const transformTree = (_tree: any) => {
    let tree = JSON.parse(JSON.stringify(_tree));

    /*Traverse via BFS */
    let queue = [];
    let current: any = tree;

    queue.push(tree);
    while (queue.length) {
        current = queue.shift();

        // transform (self + spouse[])
        applyTransforms(current);

        if (current.children && current.children.length) {
            queue = queue.concat(current.children);
        }
    }
    return tree;
}

const searchTree = (id: String | null, tree: any) => {
    let queue = [];
    let current: any = tree;
    let result = [];

    queue.push(tree);
    while (queue.length) {
        current = queue.shift();
        if (!current) continue;

        // search condition

        if (current.self && current.self.id.includes(id)) result.push(current.self);
        if (current.spouse && current.spouse.length) {
            for (let i = 0; i < current.spouse.length; i++) {
                if (current.spouse[i].id.includes(id)) result.push(current.spouse[i]);
            }
        }

        if (current.children && current.children.length) {
            queue = queue.concat(current.children);
        }
    }
    return result;
}


const findInTreeById = (id: String | null, tree: any): Person | null => {
    let queue = [];
    let current: any = tree;

    queue.push(tree);
    while (queue.length) {
        current = queue.shift();
        if (!current) continue;

        // search condition
        let result = null;
        if (current.self && current.self.id == id) result = current.self;
        if (current.spouse && current.spouse.length) {
            for (let i = 0; i < current.spouse.length; i++) {
                if (current.spouse[i].id == id) result = current.spouse[i];
            }
        }
        if (result) return TRANSFORMS.data(result);

        if (current.children && current.children.length) {
            queue = queue.concat(current.children);
        }
    }

    return null;
}

export { transformTree, searchTree, findInTreeById }
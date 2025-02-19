import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
    try {
        const countContacts = await readContacts();
        return countContacts.length;
    }
    catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());

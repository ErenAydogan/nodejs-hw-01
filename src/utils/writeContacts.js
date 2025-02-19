import fs from "fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
    const data = updatedContacts;

    try{
        await fs.writeFile(PATH_DB, JSON.stringify(data, null, 4), 'utf-8');
    }
    catch (error){
        console.error(error.message);
    }
};

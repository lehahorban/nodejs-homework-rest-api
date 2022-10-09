const fs = require('fs/promises')
const path = require("path")
const { nanoid } = require("nanoid")
const contactsPath = path.join(__dirname, "contacts.json")
const changeContacts = async contacts => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))

const listContacts = async () => {
  const result = await fs.readFile(contactsPath)
    return JSON.parse(result)
}

const getContactById = async (id) => {
   const contacts = await listContacts();       
    const contactsId = String(id)
    const result = contacts.find(item => item.id === contactsId)
    return result || null
}

const removeContact = async (id) => {
    const contacts = await listContacts()
    const contactsId = String(id)
    const index = contacts.findIndex(item => item.id === contactsId)
    if (index === -1) {
        return null
    }
    const [result] = contacts.splice(index, 1)
    await changeContacts(contacts)
    return result
}

const addContact = async ({ name, email, phone }) => {
     const contacts = await listContacts();  
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    }

    contacts.push(newContact)
    await changeContacts(contacts)
    return newContact
    
}


const updateContact = async (id, data)=> {
    const contacts = await listContacts()
    const contactsId = String(id)
    const index = contacts.findIndex(item => item.id === contactsId)
    if (index === -1) {
        return null
    }
    contacts[index] = { id, ...data }
    await changeContacts(contacts)
    return contacts[index]
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}

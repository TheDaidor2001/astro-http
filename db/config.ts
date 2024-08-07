import { column, defineDb, defineTable } from 'astro:db';


const Clients = defineTable({
  columns: {
    id: column.number({primaryKey: true}) ,
    name: column.text(),
    isActive: column.boolean() ,
    age: column.number() ,
  }
})




// https://astro.build/db/config
export default defineDb({
  tables: {
    Clients,
  }
});

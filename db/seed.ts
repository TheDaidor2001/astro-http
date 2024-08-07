import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Clients).values([
		{id:1, name: "Kasim", age: 35, isActive: true},
		{id:2, name: "Yasin", age: 32, isActive: true},
		{id:3, name: "Carlos", age: 15, isActive: false},
		{id:4, name: "Jhon", age: 40, isActive: true},
		{id:5, name: "Peter", age: 23, isActive: false},
	])


	console.log('Seed Executed');
}

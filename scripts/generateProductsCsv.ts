import crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { Product } from '../models/Product';
import { parse } from 'json2csv';

// List of toy names
const toyNames = [
	'Lego City Fire Truck',
	'Barbie Dream House',
	'Hot Wheels Track Builder',
	'Play-Doh Fun Factory',
	'Nerf Blaster Elite',
	'Monopoly Classic',
	"Rubik's Cube",
	'Magic 8 Ball',
	'RC Car Turbo Racer',
	'Puzzle 1000 Pieces',
	'Transformers Optimus Prime',
	'Action Figure Superman',
	'UNO Card Game',
	'Beyblade Burst Turbo',
	'Jenga Classic',
	'Teddy Bear Plushie',
	'Toy Kitchen Set',
	'Crayola Art Set',
	'Trampoline Mini',
	'Basketball Hoop',
	'Remote Control Drone',
	'Magic Tricks Set',
	'Toy Microscope',
	"Scooter Kid's Ride",
	'Spiderman Action Figure',
	'Toy Train Set',
	'Stuffed Dinosaur',
	'Toy Robot',
	'Airplane Model',
	'Beach Sand Toy Set',
	'Toy Doctor Kit',
	'Water Gun Super Soaker',
	'Toy Guitar',
	'Pirate Ship Set',
	'Princess Castle',
	'Toy Cash Register',
	'RC Helicopter',
	'Toy Drum Set',
	'Play Tent Castle',
	'Toy Tool Set',
	'Walkie Talkies',
	'Toy Race Car Set',
	'Animal Figures Set',
	'Building Blocks Set',
	'Toy Binoculars',
	'Toy Stunt Car',
	'Dinosaur Fossil Kit',
	'Toy Dump Truck',
	'Toy Piano',
];

// Function to generate a random toy item
const generateToyItem = (): Product => {
	const toyName = toyNames[Math.floor(Math.random() * toyNames.length)];
	const description = `A fun and exciting ${toyName} for kids of all ages. Perfect for imaginative play and skill development.`;
	const price = Math.floor(Math.random() * 95) + 5;

	return {
		id: crypto.randomUUID(),
		title: toyName,
		description,
		price,
	};
};

// Main function to generate CSV
const generateCsvFile = () => {
	console.log('Generating 50 toy items and writing to CSV file...');

	const items: Product[] = [];

	for (let i = 0; i < 50; i++) {
		items.push(generateToyItem());
	}

	const csv = parse(items, { fields: ['id', 'title', 'description', 'price'] });

	const outputPath = path.join(__dirname, 'products.csv');
	fs.writeFileSync(outputPath, csv, 'utf8');

	console.log(`CSV file written successfully to ${outputPath}`);
};

// Execute
generateCsvFile();

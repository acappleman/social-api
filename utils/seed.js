const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomThoughts } = require('./data').default;

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing students
  await User.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 15; i++) {

    const username = getRandomName();
    const email = `${username}@test.com`;
    const thoughts = await getRandomThoughts(20);
    const friends = [];

    users.push({
      username,
      email,
      thoughts,
      friends,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

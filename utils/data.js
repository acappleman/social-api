const usernames = [
  'acappleman',
  'mark',
  'tj',
  'darlene',
  'candance',
  'john',
  'kay',
  'matt',
  'josh',
  'jordan',
  'tim',
  'meredith',
  'alan',
  'amanda1',
  'dee1',
  'sam1',
  'acappleman1',
  'mark1',
  'tj1',
  'darlene1',
  'candance1',
  'john1',
  'kay1',
  'matt1',
  'josh1',
  'jordan1',
  'tim1',
  'meredith1',
  'alan1',
  'amanda1',
  'dee1',
  'sam1',
];

const thoughts = [
  'Life is good',
  'Life is hard sometimes',
  'I like cake',
  'I like to eat breakfast in bed',
  'The office is a great show',
  'Tv is overrated',
  'Movie trailers are boring',
  'Hello world',
  'I had a great time',
  'We are leaving',
  'Seafood is gross',
  'My favorite place is my bed',
  'I like to travel',
  'Firefox is the worst browser',
  'Running is hard',
  'Cooking is the worst',
  'Poker is a great way to lose your money',
  'Deliveries are the best. I love getting things delivered',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random name
const getRandomName = () =>
  `${getRandomArrItem(usernames)}`;

const getRandomReactions = () => {
  return {
    reactionBody: `${getRandomArrItem(thoughts)}`,
    username: getRandomName(),
  };
}
  
// Function to generate random thoughts that we can add to user object.
const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
      username: getRandomName(),
      reactions: getRandomReactions(),
    });
  }
  return results;
};

export default { getRandomName, getRandomThoughts };

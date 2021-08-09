export default function getRandomNumber(range) {
  return Math.ceil(Math.random() * range) * (Math.round(Math.random()) ? 1 : -1)
}
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer lRPT4uRwoMlq6RjPGshARJT4j6zWNfm68T2JTax9NxwxzWnIWLmdWOjeLFKoLAkjVh32XCK7l3kJN3EZKj7tdyGJfkIfA1FHrCtNxRGZXbAGiPe0DqkAGhwVUKXvYnYx',
  },
});

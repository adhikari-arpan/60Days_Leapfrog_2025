function App() {
  // Variables
  const username = "Arpan";
  const website = "https://arpanadhikari7.com.np";
  const age = 18;
  const hobbies = ["Coding", "Music", "Traveling"];
  const profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAHqoUV-9rcQpzK1zBE-0frLaCH3-bZrLyA&s";
  const isLoggedIn = true;

  // Function for greeting
  const getGreeting = (name) => `Hello, ${name}!`;

  // Example object
  const address = {
    city: "Lalitpur",
    country: "Nepal",
  };

  return (
    <>
      {/* Simple variable injection */}
      <h1>I am {username}</h1>

      {/* Injecting variables in attributes */}
      <img src={profilePic} alt={`${username}'s profile`} width={100} />

      {/* Injecting expressions and function results */}
      <p>{getGreeting(username)}</p>
      <p>Username in uppercase: {username.toUpperCase()}</p>

      {/* Conditional rendering with variables */}
      <h2>
        {isLoggedIn ? `Welcome back, ${username}!` : "Welcome, guest!"}
      </h2>

      {/* Injecting variables and mapping arrays */}
      <p>My age is {age}</p>
      <p>My hobbies are: {hobbies.join(", ")}</p>
      <ul>
        {hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>

      {/* Injecting object properties */}
      <p>
        I live in {address.city}, {address.country}
      </p>

      {/* Injecting variables in links */}
      <a href={website} target="_blank" rel="noopener noreferrer">
        Click to visit my website
      </a>
    </>
  );
}

export default App;

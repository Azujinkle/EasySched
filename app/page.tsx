export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">Welcome to EasySched!</h1>
        </div>
        <div>
          <p className="text-lg sm:text-xl text-center sm:text-left">
            Planning meetings, hangouts, or events? Scheds make it a breeze!<br></br> Most scheduling apps require unnecessary overhead, but EasySched perseveres with:
          </p>
          <ol>
            <li className="text-lg sm:text-xl text-center sm:text-left">
              <strong>Deduce Ideal Time:</strong> Scheds can account for parameters such as required/optional participants, preferred times, and more.
            </li>
            <li className="text-lg sm:text-xl text-center sm:text-left">
              <strong>Sending Reminders:</strong> Remind participants to update their personal availabilities or the finalized schedule.
            </li>
            <li className="text-lg sm:text-xl text-center sm:text-left">
              <strong>Automatic Responses:</strong> Participants only need to mark their availability once, and it automatically fills on any Scheds they are added to.
            </li>
            <li className="text-lg sm:text-xl text-center sm:text-left">
              <strong>Participant Groups:</strong> Perfect for scheduling gatherings with the same people.
            </li> 
          </ol>
        </div>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">Create a free account today!</h2>
          <p className="text-lg sm:text-xl text-center sm:text-left">
            It isn't necessary, but it helps with:
          </p>
          <ol>
            <li className="text-lg sm:text-xl text-center sm:text-left">
              <strong>Saving Scheds:</strong> Easily access numerous Scheds at once.
            </li>
            <li className="text-lg sm:text-xl text-center sm:text-left">
              <strong>Update Personal Scheds:</strong> Ensure a plan for one event doesn't interfere with another.
            </li>
          </ol>
          <a href="/signup">
            <button className="bg-foreground text-background hover:bg-blue-500 font-bold py-2 px-4 rounded">
              Create Account
            </button>
          </a>
        </div>
      </main>
    </div>
  );
}

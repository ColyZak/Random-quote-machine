import { useState } from "react";

const App = () => {
  let quotes = [
    {
      author: "Nagato",
      text: "If you don’t share someone’s pain, you can never understand them.",
    },
    {
      author: "Madara Uchiha",
      text: "Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.",
    },
    {
      author: "Haku",
      text: "It is only through the eyes of others that our lives have any meaning.",
    },
    {
      author: "Jiraiya",
      text: "A person grows up when he’s able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.",
    },
    {
      author: "Naruto Uzumaki",
      text: "If he rips my arms off, I’ll kick him to death. If he rips my legs off, I’ll bite him to death! If he rips my head off, I’ll stare him to death! And if he gouges out my eyes, I’ll curse him from beyond the grave.",
    },
    {
      author: "Orochimaru",
      text: "It’s human nature not to realize the true value of something, unless they lose it.",
    },
    {
      author: "Obito Uchiha",
      text: "No one cared who I was until I put on a mask.",
    },
    {
      author: "Sasuke Uchiha",
      text: "Was she having fun in her little make-believe fantasy of true love? As for me, I have absolutely no reason to love her and likewise, I can see no reason why she would love me.",
    },
    {
      author: "Itachi Uchiha",
      text: "Your comrades are there to make up for what you cannot do and to prevent you from ignoring things that you actually might have been able to do.",
    },
    {
      author: "Pain",
      text: "Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain because life’s greatest lessons are learned through pain.",
    },
    {
      author: "Gaara",
      text: "Just because someone is important to you, it doesn’t necessarily mean that, that person is good. Even if you knew that person was evil… People cannot win against their loneliness.",
    },
    {
      author: "Shikamaru Nara",
      text: "It’s because we help out when they’re in trouble that we can count on them to come running when we need it.",
    },
    {
      author: "Neji Hyuga",
      text: "The difference between stupidity and genius, is that genius has its limits.",
    },
    {
      author: "Rock Lee",
      text: "A dropout will beat a genius through hard work.",
    },
    {
      author: "Hinata Hyuga",
      text: "When I watch you, I feel strong, like I can do anything – that even I am worth something.",
    },
    {
      author: "Kakashi Hatake",
      text: "The people from this village are different from your average village. Even if it means dying, there’s not a single one of us, who would sell out a comrade.",
    },
    {
      author: "Sai",
      text: "A smile is the best way to get oneself out of a tight spot, even if it is a fake one. Surprisingly enough, everyone takes it at face value.",
    },
  ];

  const [content, setContent] = useState({
    author: quotes[0].author,
    text: quotes[0].text,
  });

  function handleClick(e) {
    e.preventDefault();
    let index = Math.floor(Math.random() * quotes.length);
    setContent({ author: quotes[index].author, text: quotes[index].text });
  }

  return (
    <div id="container" className="container">
      <h1>Random Quote Generator</h1>
      <div className="card bg-light">
        <div id="quote-box" className="card-body">
          <div id="text" className="fst-italic">
            “{content.text}”
          </div>
          <div id="author" className="text-secondary mt-2">
            -{content.author}
          </div>

          <button
            id="new-quote"
            className="btn btn-success btn-block  mt-2"
            onClick={handleClick}
          >
            new quote
          </button>
          <a
            className="twitter-share-button btn btn-info btn-block"
            href="https://twitter.com/intent/tweet"
            id="tweet-quote"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X, ChevronLeft, ChevronRight, Gift, Sparkles, Flower2, ArrowDown } from "lucide-react";
import "./styles.css";

// 15 unique photos across the site — zero duplicates, zero reuse
const introPhotos = [
  { src: "/images/memory-03.webp", alt: "Our silly, sweet moments" },
  { src: "/images/memory-12.webp", alt: "Laughing together under the night lights" },
  { src: "/images/memory-09.webp", alt: "Every movie date and little adventure" },
];

const welcomePhoto = {
  src: "/images/memory-08.webp",
  caption: "The way I look at you is the way I want to look at you for the rest of my life.",
};

const letters = [
  {
    id: "letter-1",
    icon: "✉",
    tag: "from the bottom of my heart",
    title: "A Little Letter For You",
    message:
      "Baby, I don't think words will ever be enough to tell you how deeply I love you. Out of everything life has given me, having you by my side is my greatest blessing. You make my bad days softer and my good days unforgettable. These two years have shown me what real happiness feels like, and I want nothing more than to keep loving you, protecting your smile, and holding your hand through every tomorrow.",
    photo: "/images/memory-11.webp",
    photoCaption: "Every kiss with you reminds me how lucky I am.",
  },
  {
    id: "letter-2",
    icon: "♡",
    tag: "through every high and low",
    title: "The Real Us & Why I Choose You",
    message:
      "We've had our disagreements, our misunderstandings, and little difficult days too. But what I love most about us is that we never let go. Even when things get tough, my heart always searches for you. Every hard moment has only proven to me that you're the only person I ever want to fight for. I wouldn't trade our story, with all its realness and imperfect beauty, for anything in the universe.",
    photo: "/images/memory-06.webp",
    photoCaption: "Resting my forehead against yours always brings me peace.",
  },
  {
    id: "letter-3",
    icon: "✿",
    tag: "our sweetest memories",
    title: "The Days That Stole My Heart",
    message:
      "Remember the shy smiles, the walks where we lost track of time, the little flowers, and all our silly selfies? Being with you turns ordinary streets into places I never want to leave. Whether we're eating street food, watching a movie, or just sitting quietly together, as long as you're beside me, I have everything I need.",
    photo: "/images/memory-04.webp",
    photoCaption: "Seeing that sweet pout and those roses made my heart melt.",
  },
  {
    id: "letter-4",
    icon: "✧",
    tag: "my favorite human",
    title: "Why You Are My Whole World",
    message:
      "I love your laugh, your voice, the warmth of your hands, and the cute little things you do without even realizing. But more than that, I love your kind soul. You understand me in ways no one else ever could. You make me want to be better, and you make me feel truly cherished. You're not just my partner, baby — you're my best friend, my home, and the love of my life.",
    photo: "/images/memory-07.webp",
    photoCaption: "You don't just light up a photo — you light up my entire existence.",
  },
];

const togetherPhoto = {
  src: "/images/memory-02.webp",
  alt: "Side by side through every chapter",
};

const galleryPhotos = [
  {
    src: "/images/memory-01.webp",
    caption: "One of our earliest memories, and I was already completely in love.",
  },
  {
    src: "/images/memory-05.webp",
    caption: "Ordinary evenings that turned into memories I'll hold forever.",
  },
  {
    src: "/images/memory-10.webp",
    caption: "Under hanging stars, but my eyes were only on you.",
  },
  {
    src: "/images/memory-13.webp",
    caption: "The way you look at me makes me feel like the luckiest man alive.",
  },
  {
    src: "/images/memory-14.webp",
    caption: "A quiet second where time stood still, just you and me.",
  },
];

const finalePhoto = {
  src: "/images/memory-15.webp",
  alt: "Looking our best, but best of all together",
};

function App() {
  const [opened, setOpened] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  const [openedLetter, setOpenedLetter] = useState(0);

  const movePhoto = (direction) => {
    setActivePhoto((current) => (current + direction + galleryPhotos.length) % galleryPhotos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhoto === null) return;
      if (e.key === "ArrowLeft") movePhoto(-1);
      if (e.key === "ArrowRight") movePhoto(1);
      if (e.key === "Escape") setActivePhoto(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="petal petal-one">✿</div>
      <div className="petal petal-two">❀</div>
      <div className="petal petal-three">✿</div>

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            className="intro"
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.025 }}
            transition={{ duration: 0.8 }}
          >
            <div className="intro-flower">
              <Flower2 size={26} strokeWidth={1} />
            </div>
            <p className="eyebrow">A little something, straight from my heart</p>
            <h1>
              Happy <em>2nd</em>
              <br />
              Anniversary, Baby
            </h1>
            <p className="date-line">
              01 NOVEMBER 2024 <span>—</span> 01 NOVEMBER 2026
            </p>

            <div className="hero-photos">
              {introPhotos.map((photo, i) => (
                <motion.div
                  className={`hero-photo hero-photo-${i + 1}`}
                  key={photo.src}
                  initial={{ opacity: 0, y: 28, rotate: (i - 1) * 6 }}
                  animate={{ opacity: 1, y: 0, rotate: (i - 1) * 6 }}
                  transition={{ delay: 0.35 + i * 0.16, duration: 0.8 }}
                >
                  <img src={photo.src} alt={photo.alt} />
                </motion.div>
              ))}
            </div>

            <p className="intro-note">
              Two years of loving you. 730 days of knowing you're my person.
            </p>
            <button className="primary-btn" onClick={() => setOpened(true)}>
              Open your surprise <Heart size={15} fill="currentColor" />
            </button>
            <span className="tiny-hint">made just for you, baby</span>
          </motion.section>
        ) : (
          <motion.div
            key="site"
            className="site"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <header className="topbar">
              <a className="brand" href="#top">
                for you <Heart size={13} fill="currentColor" />
              </a>
              <span>01.11.24 — 01.11.26</span>
            </header>

            {/* WELCOME SECTION — First surprise with the requested new photo */}
            <section className="welcome section-wrap" id="top">
              <p className="eyebrow">two years with my favourite human</p>
              <h2>
                Out of everyone in this world,
                <br />
                I love <em>you the most.</em>
              </h2>
              <p className="welcome-copy">
                Baby, these two years have been the happiest, most meaningful days of my life. Loving you is the easiest
                thing I've ever done. You are my safe haven, my biggest smile, and the best part of every single day. I'm
                so endlessly grateful that I get to be yours.
              </p>
              <a className="scroll-link" href="#letters">
                Open your letters & memories <ArrowDown size={14} />
              </a>
              <div className="welcome-image">
                <img src={welcomePhoto.src} alt="You and me together" />
                <span>{welcomePhoto.caption}</span>
              </div>
            </section>

            {/* LETTERS & ENVELOPE SURPRISES — Each note contains a special unique memory photo */}
            <section className="letter-section section-wrap" id="letters">
              <div className="section-heading">
                <p className="eyebrow">open when you feel like it</p>
                <h2>
                  A few little <em>letters for you</em>
                </h2>
                <p>Tap each envelope. I left a message and a special memory tucked inside for you.</p>
              </div>

              <div className="gift-row">
                {letters.map((letter, index) => (
                  <motion.button
                    className={`gift-card ${openedLetter === index ? "selected" : ""}`}
                    key={letter.id}
                    onClick={() => setOpenedLetter(index)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="gift-icon">{letter.icon}</span>
                    <span className="gift-title">{letter.title}</span>
                    <span className="gift-action">
                      {openedLetter === index ? "reading now" : "open letter"} <span>↗</span>
                    </span>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {openedLetter !== null && (
                  <motion.div
                    className="gift-message"
                    key={openedLetter}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="gift-message-inner">
                      <div className="gift-letter-body">
                        <span className="message-flower">✿</span>
                        <p className="eyebrow">{letters[openedLetter].tag}</p>
                        <h3>{letters[openedLetter].title}</h3>
                        <p className="gift-text">{letters[openedLetter].message}</p>
                      </div>
                      <div className="gift-letter-photo">
                        <div className="polaroid-frame">
                          <img
                            src={letters[openedLetter].photo}
                            alt={letters[openedLetter].photoCaption}
                            loading="lazy"
                          />
                          <p className="polaroid-caption">{letters[openedLetter].photoCaption}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>

            {/* TOGETHER SECTION — Relationship depth & journey */}
            <section className="together section-wrap">
              <div className="together-image">
                <img src={togetherPhoto.src} alt={togetherPhoto.alt} />
              </div>
              <div className="together-copy">
                <p className="eyebrow">through all of it</p>
                <h2>
                  The best part
                  <br />
                  is <em>having you.</em>
                </h2>
                <p>
                  From college hallways to quiet late-night rides, we've grown up together through these two years. We've
                  watched each other change, learn, laugh, and navigate life. Through every transition, having your hand
                  in mine has been the one thing that always grounded me.
                </p>
                <p>
                  We've had our fights and misunderstandings, like every real couple. But even in those moments, I knew I
                  never wanted anyone else. Thank you for choosing me every single day. Being your partner is the greatest
                  privilege of my life.
                </p>
              </div>
            </section>

            {/* CURATED MEMORIES GALLERY — Clean, spacious, standout editorial layout */}
            <section className="memories section-wrap" id="memories">
              <div className="section-heading">
                <p className="eyebrow">moments etched in time</p>
                <h2>
                  Our <em>memories</em>
                </h2>
                <p>Every photo holds a second in time I will cherish forever. Click to view.</p>
              </div>
              <div className="photo-wall">
                {galleryPhotos.map((photo, index) => (
                  <motion.button
                    className={`memory-card memory-${index + 1}`}
                    key={photo.src}
                    onClick={() => setActivePhoto(index)}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <img src={photo.src} alt={`Memory ${index + 1}`} loading="lazy" />
                    <span className="photo-caption">{photo.caption}</span>
                    <span className="photo-zoom">＋</span>
                  </motion.button>
                ))}
              </div>
            </section>

            {/* FINALE SECTION — The ultimate promise & closing message */}
            <section className="finale section-wrap">
              <div className="finale-flower">✿</div>
              <p className="eyebrow">01 november 2026</p>
              <h2>
                To my <em>baby,</em>
              </h2>
              <p className="final-message">
                Thank you for making these two years the happiest time of my life. You are my safe place, my best friend,
                and my entire heart. I love you the most in this world, today, tomorrow, and endlessly. Happy 2nd
                Anniversary, baby. Here's to us and forever. <span>♡</span>
              </p>
              <div className="final-photo">
                <img src={finalePhoto.src} alt={finalePhoto.alt} />
              </div>
              <p className="signature">
                always and forever in love with you <Heart size={14} fill="currentColor" />
              </p>
            </section>

            <footer>
              <span>made with all my love</span>
              <Heart size={12} fill="currentColor" />
              <span>for our two years together</span>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX FOR GALLERY */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <button className="lightbox-close" aria-label="Close photo" onClick={() => setActivePhoto(null)}>
              <X />
            </button>
            <button
              className="lightbox-arrow prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                movePhoto(-1);
              }}
            >
              <ChevronLeft />
            </button>
            <motion.div
              className="lightbox-content"
              key={activePhoto}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={galleryPhotos[activePhoto].src} alt={galleryPhotos[activePhoto].caption} />
              <p>{galleryPhotos[activePhoto].caption}</p>
              <span>
                {String(activePhoto + 1).padStart(2, "0")} / {String(galleryPhotos.length).padStart(2, "0")}
              </span>
            </motion.div>
            <button
              className="lightbox-arrow next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                movePhoto(1);
              }}
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);

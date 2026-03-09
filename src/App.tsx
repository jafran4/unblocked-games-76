import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Search, 
  User, 
  Gamepad2, 
  Trophy, 
  Flame, 
  Clock, 
  ChevronRight,
  Menu,
  X,
  Star
} from 'lucide-react';

// Mock Data
const GAMES = [
  { 
    id: 'basket-random', 
    title: "Basket Random Unblocked", 
    category: "Sports", 
    image: "https://taptapshots.net/uploads/2025/8/basket-random.webp", 
    rating: 4.9,
    url: "https://ubg98.github.io/BasketRandom/"
  },
  {
    id: 'speed-dreams',
    title: "Speed Dreams Unblocked",
    category: "Racing",
    image: "https://ubuntuhandbook.org/wp-content/uploads/2013/11/speed-dreams-LOGO1.jpg",
    rating: 4.7,
    url: "https://ubg76.github.io/madalin-stunt-cars-2/"
  }
];

const SIDEBAR_GAMES = [];

const FAQS = [
  {
    question: "What is Basket Random Unblocked?",
    answer: "Basket Random Unblocked is a chaotic, physics-based 2-player basketball game where every round brings new surprises. From changing fields to different players and balls, the goal remains the same: score 5 points to win!"
  },
  {
    question: "How do I play Basket Random?",
    answer: "The controls are incredibly simple! You only need one key to jump and throw. In 2-player mode, one player uses the 'W' key while the other uses the 'Up Arrow'. The randomness of the physics is what makes it fun!"
  },
  {
    question: "Can I play Basket Random with a friend?",
    answer: "Yes! Basket Random features a dedicated 2-player mode on the same keyboard, making it one of the best local multiplayer games for school or home."
  },
  {
    question: "Why is it called 'Random'?",
    answer: "The game is called 'Random' because almost everything changes every time a basket is scored. You might find yourself playing with long arms, on an icy court, or using a bowling ball instead of a basketball."
  },
  {
    question: "Is Basket Random Unblocked free to play?",
    answer: "Absolutely. You can play the full version of Basket Random Unblocked directly in your browser without any downloads or hidden costs."
  },
  {
    question: "Does the game work on mobile?",
    answer: "Yes, Basket Random is built with HTML5 technology, meaning it works seamlessly on both desktop browsers and mobile devices."
  },
  {
    question: "What is Speed Dreams Unblocked?",
    answer: "Speed Dreams is an open-source 3D racing simulator. This unblocked version allows you to experience realistic driving physics and high-speed competition directly in your browser."
  }
];

const NAV_TABS = ["Home", "Action", "Multiplayer", "Sports", "Racing", "Arcade"];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<any>(null);

  useEffect(() => {
    if (selectedGame) {
      document.title = `${selectedGame.title} - Play Online Free`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Play ${selectedGame.title} for free! Experience chaotic physics-based basketball with friends. No downloads, unblocked for school and work.`);
      }
    } else {
      document.title = "Basket Random Unblocked - Play Free Online Basketball Game";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', "Play Basket Random Unblocked for free! Experience chaotic physics-based basketball with friends. No downloads, unblocked for school and work.");
      }
    }
  }, [selectedGame]);

  const handleLogoClick = () => {
    setSelectedGame(null);
    setActiveTab("Home");
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Overlay for better readability */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none" />

      {/* Navbar - Integrated with logo and tabs */}
      <nav className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between mx-4 mt-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={handleLogoClick}>
            <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center purple-glow group-hover:scale-110 transition-transform">
              <Gamepad2 className="text-white" size={24} />
            </div>
            <span className="font-display text-2xl tracking-wider hidden sm:block">UG76</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <img 
              src="https://image2url.com/r2/default/images/1773063131021-4918d84d-2baf-49f3-adcd-e146ceb19430.png" 
              alt="Logo" 
              className="h-10 w-auto drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] cursor-pointer"
              referrerPolicy="no-referrer"
              onClick={handleLogoClick}
            />
            <div className="flex items-center glass rounded-full px-1 py-1">
              {NAV_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedGame(null);
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                    activeTab === tab && !selectedGame ? "bg-brand-purple text-white shadow-lg" : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <User size={20} className="text-brand-purple" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-white/60 hover:text-white transition-colors">Sign up</button>
            <button className="px-8 py-2 bg-brand-purple rounded-xl text-sm font-bold purple-glow hover:brightness-110 transition-all">Login</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 glass rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_TABS.map((tab) => (
                <button
                  key={tab}
                  className="text-left py-2 text-lg font-medium border-b border-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-4 relative z-10">
        
        {selectedGame ? (
          <div className="space-y-8">
            {/* Game Player Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={selectedGame.image} className="w-12 h-12 rounded-xl object-cover shadow-lg" alt="" />
                  <div>
                    <h1 className="text-3xl font-bold">{selectedGame.title}</h1>
                    <p className="text-white/40 text-sm">{selectedGame.category} • {selectedGame.rating} Rating</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="px-6 py-2 glass rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <X size={18} /> Back to Home
                </button>
              </div>
              
              <div className="w-full max-w-[640px] aspect-video mx-auto glass rounded-3xl overflow-hidden relative bg-black shadow-2xl">
                <iframe 
                  src={selectedGame.url} 
                  className="absolute inset-0 w-full h-full border-none"
                  title={selectedGame.title}
                  allowFullScreen
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-12">
                {/* Blog Post Section */}
                <section className="glass rounded-3xl p-8 space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-display uppercase tracking-tight text-gradient">
                      {selectedGame.id === 'speed-dreams' ? 'Speed Dreams: The Ultimate Racing Simulator' : `The Chaotic Joy of ${selectedGame.title}`}
                    </h2>
                    <div className="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-4">
                      {selectedGame.id === 'speed-dreams' ? (
                        <>
                          <p>
                            Get ready to burn rubber with <strong>Speed Dreams Unblocked</strong>, the premier open-source racing simulator now available directly in your browser. Speed Dreams is not just another arcade racer; it's a deep, physics-driven simulation that challenges your driving skills across a variety of tracks and high-performance vehicles.
                          </p>
                          <p>
                            Originally developed as a desktop application, this unblocked web version brings the high-octane excitement of professional racing to any device. Whether you're navigating tight city circuits or pushing your car to the limit on long straightaways, the realistic handling and detailed environments provide an immersive experience that few browser games can match.
                          </p>
                          <h3 className="text-2xl font-bold text-white mt-8">High-Performance Racing</h3>
                          <p>
                            Speed Dreams features a wide selection of cars, from classic sports models to cutting-edge supercars. Each vehicle has its own unique handling characteristics, requiring you to master the nuances of braking, acceleration, and cornering. The game's advanced physics engine ensures that every bump in the road and every shift in weight is felt, making for a truly rewarding driving experience.
                          </p>
                          <p>
                            The "unblocked" nature of this version means you can enjoy professional-grade racing simulation even in restricted environments. With no large downloads or complex setups, you can jump into the driver's seat and start setting new lap records in seconds.
                          </p>
                          <h3 className="text-2xl font-bold text-white mt-8">Tips for the Podium</h3>
                          <p>
                            To dominate in Speed Dreams, you need to learn the "racing line." Mastering the optimal path through each corner is the key to maintaining speed and shaving seconds off your time. Don't be afraid to use the brakes—smooth entry into a turn is often faster than a wild, sliding exit. As you become more comfortable with the controls, you can start experimenting with different car setups to find the perfect balance for each track.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            In the world of online browser games, few titles manage to capture the pure, unadulterated essence of "fun" quite like <strong>{selectedGame.title}</strong>. It's a game that defies logic, ignores the laws of physics, and embraces randomness with open arms. If you've ever wanted to play basketball with ragdoll physics, changing environments, and a variety of strange balls, this is the game for you.
                          </p>
                          <p>
                            At its core, {selectedGame.title} is a 2-player basketball game. But calling it just a "basketball game" is like calling a hurricane a "breeze." The controls are deceptively simple: one button to jump and throw. However, the mastery lies in timing your jumps amidst the chaos. One moment you're playing on a standard court, and the next, you're slipping on ice or jumping through deep snow.
                          </p>
                          <h3 className="text-2xl font-bold text-white mt-8">Why It's a Must-Play</h3>
                          <p>
                            The brilliance of {selectedGame.title} lies in its unpredictability. Every time a basket is scored, the game resets with a new set of variables. Your players might suddenly have tiny heads and giant bodies, or the basketball might be replaced by a heavy bowling ball or a light-as-air beach ball. This constant shifting keeps the gameplay fresh and ensures that no two matches are ever the same.
                          </p>
                          <p>
                            It's the perfect "unblocked" game because it requires no installation and runs smoothly on almost any hardware. Whether you're looking for a quick 5-minute break or a heated tournament against a friend, {selectedGame.title} delivers instant gratification. The local multiplayer mode is particularly strong, fostering the kind of couch-co-op (or desk-co-op) rivalry that makes gaming so memorable.
                          </p>
                          <h3 className="text-2xl font-bold text-white mt-8">Mastering the Randomness</h3>
                          <p>
                            While the game is random, there is a layer of strategy. Learning how the different balls react to the physics engine is key. A bowling ball requires a much stronger jump-throw than a standard ball, while the ice court requires you to account for momentum. Mastering these nuances while your opponent is flailing wildly is how you secure that final 5th point for the win.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </section>

                {/* FAQ Section */}
                <section className="space-y-8">
                  <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
                    <Clock className="text-brand-purple" />
                    Frequently Asked Questions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FAQS.map((faq, idx) => (
                      <div key={idx} className="glass p-6 rounded-2xl space-y-3">
                        <h4 className="font-bold text-lg text-white">{faq.question}</h4>
                        <p className="text-sm text-white/50 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="lg:col-span-4 space-y-8">
                <div className="glass rounded-3xl p-6 space-y-6">
                  <h3 className="font-bold text-xl">Game Info</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Category</span>
                      <span>{selectedGame.category}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Rating</span>
                      <span className="text-yellow-400 flex items-center gap-1"><Star size={14} fill="currentColor" /> {selectedGame.rating}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Developer</span>
                      <span>Random Games</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/40">Platform</span>
                      <span>Web Browser</span>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-brand-purple rounded-xl font-bold purple-glow hover:brightness-110 transition-all">
                    Share Game
                  </button>
                </div>

                <div className="glass rounded-3xl p-6 space-y-6">
                  <h3 className="font-bold text-xl">Recent Uploads</h3>
                  <div className="space-y-4">
                    {GAMES.filter(g => g.id !== selectedGame.id).map(game => (
                      <div 
                        key={game.id} 
                        className="flex gap-4 group cursor-pointer"
                        onClick={() => setSelectedGame(game)}
                      >
                        <img src={game.image} className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform" alt="" />
                        <div>
                          <h4 className="font-bold group-hover:text-brand-purple transition-colors">{game.title}</h4>
                          <p className="text-xs text-white/40">{game.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Section: Hero & Grid */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Hero Section - Redesigned to match reference */}
              <section className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left: Character Image */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="md:col-span-5 relative"
                >
                  <img 
                    src="https://image2url.com/r2/default/images/1773063131021-4918d84d-2baf-49f3-adcd-e146ceb19430.png" 
                    alt="Character"
                    className="w-full h-auto max-h-[400px] object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Right: Text Content */}
                <div className="md:col-span-7 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-gradient leading-none">
                    BASKET<br />RANDOM
                  </h1>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/70 text-base leading-relaxed max-w-xl"
                >
                  Experience the most chaotic basketball game ever created. Basket Random brings high-octane physics, 
                  unpredictable rounds, and seamless 2-player gameplay directly to your browser.
                </motion.p>
              </div>
            </section>

              {/* Games Grid */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-heading font-bold flex items-center gap-3">
                    <Clock className="text-brand-purple" />
                    Recent Uploaded Games
                  </h2>
                  <button className="text-sm text-white/40 hover:text-brand-purple flex items-center gap-1 transition-colors">
                    View All <ChevronRight size={16} />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {GAMES.length > 0 ? (
                    GAMES.map((game, idx) => (
                      <motion.div
                        key={game.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setSelectedGame(game)}
                        className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-brand-purple/30 transition-all"
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={game.image} 
                            alt={game.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center purple-glow scale-0 group-hover:scale-100 transition-transform">
                              <Play fill="currentColor" size={20} className="ml-1" />
                            </div>
                          </div>
                          <div className="absolute top-3 right-3 px-2 py-1 glass rounded-lg text-[10px] font-bold flex items-center gap-1">
                            <Star size={10} className="text-yellow-400 fill-yellow-400" />
                            {game.rating}
                          </div>
                        </div>
                        <div className="p-4 flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-lg group-hover:text-brand-purple transition-colors">{game.title}</h3>
                            <p className="text-xs text-white/40">{game.category}</p>
                          </div>
                          <button className="p-2 glass rounded-lg hover:bg-brand-purple transition-colors">
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center glass rounded-3xl border-dashed border-white/10">
                      <Gamepad2 className="mx-auto text-white/10 mb-4" size={48} />
                      <p className="text-white/40 font-heading text-xl">No games available at the moment.</p>
                      <p className="text-white/20 text-sm mt-2">Check back later for new releases!</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Home Page Blog & FAQ - Added for better visibility and SEO */}
              <div className="space-y-12 pt-12 border-t border-white/5">
                <section className="glass rounded-3xl p-8 space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-display uppercase tracking-tight text-gradient">Welcome to Basket Random Unblocked</h2>
                    <div className="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-4">
                      <p>
                        Looking for the best place to play <strong>Basket Random Unblocked</strong>? You've found it! Our platform is dedicated to providing the smoothest, most reliable gaming experience for one of the most popular physics-based sports games on the web.
                      </p>
                      <p>
                        Basket Random is more than just a game; it's a test of reflexes and a celebration of chaos. Whether you're playing solo against the AI or challenging a friend in local 2-player mode, the unpredictable nature of the game ensures that every match is a unique experience.
                      </p>
                      <h3 className="text-2xl font-bold text-white mt-8">Why Play Here?</h3>
                      <p>
                        We ensure that our version of Basket Random is always unblocked and accessible, even in restricted environments like schools or offices. With no downloads required and a focus on performance, you can jump straight into the action with just a single click.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-8">
                  <h2 className="text-3xl font-heading font-bold flex items-center gap-3">
                    <Clock className="text-brand-purple" />
                    General FAQ
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {FAQS.map((faq, idx) => (
                      <div key={idx} className="glass p-6 rounded-2xl space-y-3">
                        <h4 className="font-bold text-lg text-white">{faq.question}</h4>
                        <p className="text-sm text-white/50 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Right Section: Sidebar */}
            <aside className="lg:col-span-3 space-y-6">
              <div className="glass rounded-3xl p-4 space-y-6 sticky top-28">
                <div className="flex items-center justify-between px-2">
                  <h3 className="font-heading font-bold text-lg">Trending Games</h3>
                </div>

                <div className="flex flex-col gap-4">
                  {SIDEBAR_GAMES.length > 0 ? (
                    SIDEBAR_GAMES.map((game, idx) => (
                      <motion.div 
                        key={game.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                          idx === 1 ? 'ring-2 ring-brand-purple ring-offset-4 ring-offset-black/50' : ''
                        }`}
                      >
                        <img 
                          src={game.image} 
                          alt={game.title}
                          className={`w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-110 ${
                            idx !== 1 ? 'grayscale hover:grayscale-0' : ''
                          }`}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                          <h4 className="font-bold text-sm">{game.title}</h4>
                          <p className="text-[10px] text-brand-purple font-bold">{game.status}</p>
                        </div>
                        {idx === 1 && (
                          <div className="absolute inset-0 bg-brand-purple/10 pointer-events-none" />
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <div className="py-12 text-center glass rounded-2xl border-dashed border-white/10">
                      <p className="text-white/20 text-xs italic">No trending games yet.</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <button className="w-full py-3 glass rounded-xl text-xs font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Trophy size={16} className="text-yellow-500" />
                    Leaderboards
                  </button>
                  <button className="w-full py-3 bg-brand-purple rounded-xl text-xs font-bold purple-glow hover:brightness-110 transition-all">
                    Join Community
                  </button>
                </div>
              </div>
            </aside>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-12 glass py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
                <Gamepad2 size={18} />
              </div>
              <span className="font-display text-xl tracking-wider">UG76</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              The world's most popular destination for unblocked games. Play thousands of titles for free, anywhere, anytime.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Categories</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Action Games</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Sports Games</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Multiplayer</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Puzzle Games</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm flex-1 outline-none focus:border-brand-purple/50"
              />
              <button className="p-2 bg-brand-purple rounded-xl hover:brightness-110 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-white/20">
          © 2024 Unblocked Games 76. All rights reserved. Design inspired by cinematic excellence.
        </div>
      </footer>
    </div>
  );
}

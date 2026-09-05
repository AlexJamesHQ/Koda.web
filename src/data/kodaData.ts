import { ScreenshotItem, PlayerStyle, DownloadOption, FeatureItem } from '../types';

export const SCREENSHOTS: ScreenshotItem[] = [
  // Music Mode
  {
    id: '01-home-music',
    title: 'Music Home',
    titleBn: 'মিউজিক হোম ফিড',
    category: 'music',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/01-home-music-your-mix.png',
    subtitle: 'Your Mix Hero & Carousels',
    subtitleBn: 'ইউর মিক্স হিরো ও ক্যারোসেল',
    description: 'Personalized quick picks, recently played rail, and taste-based recommendation carousels.',
    descriptionBn: 'ব্যক্তিগতকৃত গান, সম্প্রতি প্লে করা তালিকা এবং পছন্দের উপর ভিত্তি করে প্রস্তাবনা।'
  },
  {
    id: '05-library-music',
    title: 'Music Library',
    titleBn: 'মিউজিক লাইব্রেরি',
    category: 'music',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/05-library-music.png',
    subtitle: 'Playlists, Artists & Albums',
    subtitleBn: 'প্লেলিস্ট, আর্টিস্ট ও অ্যালবাম',
    description: 'Sort that persists across launches: Most played, Recently added with explicit sorting tags.',
    descriptionBn: 'সর্বাধিক প্লে হওয়া এবং সম্প্রতি যুক্ত করা গানসহ স্থায়ী সাজানো লাইব্রেরি।'
  },
  {
    id: '19-library-downloads',
    title: 'Offline Downloads',
    titleBn: 'অফলাইন ডাউনলোড',
    category: 'music',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/19-library-music-with-downloads.png',
    subtitle: 'Saved To Device Storage',
    subtitleBn: 'ডিভাইস স্টোরেজে সংরক্ষিত',
    description: 'Files saved to Downloads/Koda/Music, playable across all media players.',
    descriptionBn: 'Downloads/Koda/Music ফোল্ডারে গান সংরক্ষিত, যেকোনো প্লেয়ারে চালানো যায়।'
  },
  {
    id: '07-search-songs',
    title: 'Song Search',
    titleBn: 'গান সার্চ',
    category: 'music',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/07-search-music-songs.png',
    subtitle: 'Full YouTube Music Index',
    subtitleBn: 'সম্পূর্ণ ইউটিউব মিউজিক ইনডেক্স',
    description: 'Infinite scroll pages as you browse; tapping a track spins up a related-song radio queue.',
    descriptionBn: 'স্ক্রোল করার সাথে সাথে গান লোড হয় এবং গান ট্যাপ করলেই অটোমেটিক রেডিও কিউ শুরু হয়।'
  },
  {
    id: '08-search-artists',
    title: 'Artist Search',
    titleBn: 'শিল্পী সার্চ',
    category: 'music',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/08-search-music-artists.png',
    subtitle: 'Categorized Search Results',
    subtitleBn: 'ক্যাটাগরি ভিত্তিক ফলাফল',
    description: 'Explore full artist back catalogues, top tracks, and discographies.',
    descriptionBn: 'শিল্পীদের সম্পূর্ণ অ্যালবাম, জনপ্রিয় গান এবং ডিসকোগ্রাফি ঘুরে দেখুন।'
  },
  {
    id: '18-downloads-music',
    title: 'Download Manager',
    titleBn: 'ডাউনলোড ম্যানেজার',
    category: 'music',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/18-downloads-music.png',
    subtitle: 'Background Queue & Retry',
    subtitleBn: 'ব্যাকগ্রাউন্ড কিউ ও পুনরায় চেষ্টা',
    description: 'Survives leaving the screen through a foreground service; live progress notifications.',
    descriptionBn: 'অ্যাপ মিনিমাইজ করলেও ব্যাকগ্রাউন্ডে ডাউনলোড চালু থাকে।'
  },
  {
    id: '20-listening-history',
    title: 'Listening History',
    titleBn: 'শোনার ইতিহাস',
    category: 'music',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/20-listening-history.png',
    subtitle: 'Today, This Week, All-Time',
    subtitleBn: 'আজ, এই সপ্তাহ ও সর্বমোট',
    description: 'Stored locally on your device with individual removal and clearing.',
    descriptionBn: 'সম্পূর্ণ আপনার ডিভাইসে সংরক্ষিত থাকে, যেকোনো সময় মুছে ফেলা যায়।'
  },
  {
    id: '06-listening-statistics',
    title: 'Listening Statistics',
    titleBn: 'শোনার পরিসংখ্যান',
    category: 'music',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/06-listening-statistics.png',
    subtitle: 'Top Artists, Streak & Charts',
    subtitleBn: 'শীর্ষ শিল্পী, স্ট্রিক ও চার্ট',
    description: 'Interactive play graphs, daily/weekly streaks, and taste exploration badges.',
    descriptionBn: 'দৈনিক ও সাপ্তাহিক স্ট্রিক, বেশি শোনা গান এবং ইন্টারেক্টিভ চার্ট।'
  },

  // Player Styles
  {
    id: '09-player-wheel',
    title: 'Player Style Wheel',
    titleBn: 'প্লেয়ার স্টাইল হুইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/09-player-style-wheel.png',
    subtitle: 'Switchable By Long-Press',
    subtitleBn: 'লং প্রেস করে স্টাইল পরিবর্তন',
    description: 'Long press album art anywhere in any player to summon the 8-style rotary picker.',
    descriptionBn: 'যেকোনো প্লেয়ারের অ্যালবামে লং প্রেস করে ৮টি স্টাইলের ঘূর্ণায়মান পিকার খুলুন।'
  },
  {
    id: '10-player-classic',
    title: 'Classic Style',
    titleBn: 'ক্লাসিক স্টাইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/10-player-classic.png',
    subtitle: 'Familiar Transport',
    subtitleBn: 'পরিচিত ও সহজ কন্ট্রোল',
    description: 'Intuitive play, pause, next, previous and waveform scrubber with prominent cover art.',
    descriptionBn: 'প্লে, পজ, নেক্সট, প্রিভিয়াস এবং নির্ভুল স্ক্রাবারসহ পরিচিত প্লেয়ার লেআউট।'
  },
  {
    id: '11-player-gesture',
    title: 'Gesture Style',
    titleBn: 'জেসচার স্টাইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/11-player-gesture.png',
    subtitle: 'Swipeable Carousel',
    subtitleBn: 'সোয়াইপযোগ্য ক্যারোসেল',
    description: 'Flick between tracks horizontally with fluid spring physics and reactive tilt.',
    descriptionBn: 'স্প্রিং ফিজিক্সের সাথে বামে-ডানে সোয়াইপ করে গান পরিবর্তন করুন।'
  },
  {
    id: '03-player-editorial',
    title: 'Editorial Style',
    titleBn: 'এডিটরিয়াল স্টাইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/03-player-editorial.png',
    subtitle: 'Two-Tone Magazine Layout',
    subtitleBn: 'ম্যাগাজিন দুই-টোন লেআউট',
    description: 'Die-cut art framing with sophisticated typography and pill controls.',
    descriptionBn: 'ম্যাগাজিন ধাঁচের কাটআউট ডিজাইন এবং মার্জিত টাইপোগ্রাফি।'
  },
  {
    id: '04-player-lyrics',
    title: 'Synced Lyrics',
    titleBn: 'সিঙ্ক হওয়া লিরিক্স',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/04-player-editorial-lyrics.png',
    subtitle: 'Smooth Letter-by-Letter Highlighting',
    subtitleBn: 'শব্দে শব্দে কারাওকে হাইলাইট',
    description: 'Local and multi-provider .lrc / .ttml lyrics with smooth realtime karaoke highlight.',
    descriptionBn: 'গান চলার সাথে সাথে শব্দে শব্দে মসৃণ কারাওকে লিরিক্স স্ক্রোল হয়।'
  },
  {
    id: '12-player-canvas',
    title: 'Canvas Style',
    titleBn: 'ক্যানভাস স্টাইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/12-player-canvas.png',
    subtitle: 'Full-Bleed Album Art',
    subtitleBn: 'ফুল স্ক্রিন অ্যালবাম আর্ট',
    description: 'Chrome fades out while playing; swipe anywhere on screen to skip track.',
    descriptionBn: 'গান চলাকালীন কন্ট্রোল মিলিয়ে যায় এবং সম্পূর্ণ স্ক্রিন সোয়াইপ করে গান বদলানো যায়।'
  },
  {
    id: '13-player-bento',
    title: 'Bento Style',
    titleBn: 'বেন্টো গ্রিড স্টাইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/13-player-bento.png',
    subtitle: 'Squishy Tonal Tiles',
    subtitleBn: 'টোনড গ্রিড টাইলস',
    description: 'A modular grid of tactile tiles responding to tactile finger presses.',
    descriptionBn: 'মডুলার কিউব ও টাইলস যা আঙুলের স্পর্শে সুন্দরভাবে প্রতিক্রিয়া দেখায়।'
  },
  {
    id: '14-player-sticker',
    title: 'Sticker Style',
    titleBn: 'স্টিকার স্টাইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/14-player-sticker.png',
    subtitle: 'Die-Cut Drag & Peel',
    subtitleBn: 'ড্র্যাগ ও পিল ফিজিক্স',
    description: 'Playful squash-and-stretch toy physics; drag and tilt the sticker album badge.',
    descriptionBn: 'আসল স্টিকারের মতো টেনে নেওয়া ও বাঁকানোর মজাদার ফিজিক্স।'
  },
  {
    id: '17-player-dial',
    title: 'Dial Style',
    titleBn: 'ডায়াল স্টাইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/17-player-dial.png',
    subtitle: 'Rotary Tick-Ring Scrubber',
    subtitleBn: 'রোটারি রিং স্ক্রাবার',
    description: 'Tactile circular rotary ring instrument you rotate clockwise to scrub precision time.',
    descriptionBn: 'ঘড়ির কাঁটার মতো ঘুরিয়ে নিখুঁতভাবে টাইমিং স্ক্রাব করার রোটারি ডায়াল।'
  },
  {
    id: '15-player-morph',
    title: 'Morph Style',
    titleBn: 'মর্ফ স্টাইল',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/15-player-morph.png',
    subtitle: 'Living Hero Shape',
    subtitleBn: 'জীবন্ত মরফিং শেপ',
    description: 'Organic Material 3 Expressive shapes seamlessly transform into new geometric forms every few seconds.',
    descriptionBn: 'গান চলার সাথে সাথে ক্রমাগত পরিবর্তিত হতে থাকা জৈব জ্যামিতিক শেপ।'
  },
  {
    id: '16-player-morph-transformed',
    title: 'Morph Shape Shift',
    titleBn: 'মর্ফ শেপ রূপান্তর',
    category: 'players',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/16-player-morph-shape-change.png',
    subtitle: 'Dynamic Geometry',
    subtitleBn: 'ডায়নামিক জ্যামিতি',
    description: 'MaterialShapes referenced across 14 organic shapes driven by 120 spring physics animation specs.',
    descriptionBn: '১২০টি স্প্রিং ফিজিক্স অ্যানিমেশনের সাহায্যে ১৪টি ভিন্ন শেপে পরিবর্তিত হয়।'
  },

  // Video Mode
  {
    id: '41-video-home',
    title: 'Video Home',
    titleBn: 'ভিডিও হোম',
    category: 'video',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/41-home-video-recommended.png',
    subtitle: 'Personalized YouTube Feed',
    subtitleBn: 'ব্যক্তিগতকৃত ইউটিউব ফিড',
    description: 'Flips the entire app into video mode with taste-based or logged-in subscriptions.',
    descriptionBn: 'এক ট্যাপেই অ্যাপটি সম্পূর্ণ ভিডিও প্লেয়ার ও ফিডে রূপান্তরিত হয়।'
  },
  {
    id: '42-video-watch',
    title: 'Video Watch Page',
    titleBn: 'ভিডিও দেখার পেজ',
    category: 'video',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/42-video-watch-page.png',
    subtitle: 'Up to 2160p60 & Chapters',
    subtitleBn: '৪কে ২১৬০p রেজুলিউশন ও চ্যাপ্টার',
    description: 'True 4K video ladder, edge-swipe volume/brightness slats, 2x hold, and chapters sheet.',
    descriptionBn: '৪কে রেজুলিউশন, সাইড ড্র্যাগ করে ভলিউম-ব্রাইটনেস নিয়ন্ত্রণ ও চ্যাপ্টার নেভিগেশন।'
  },
  {
    id: '43-video-settings',
    title: 'Playback Settings',
    titleBn: 'প্লেব্যাক সেটিংস',
    category: 'video',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/43-video-playback-settings-sheet.png',
    subtitle: 'Speed & Quality Ladder',
    subtitleBn: 'গতি ও রেজুলিউশন নিয়ন্ত্রণ',
    description: 'Separate Wi-Fi and cellular defaults, background audio toggle, and playback speed up to 3x.',
    descriptionBn: 'ওয়াইফাই ও মোবাইল ডাটার জন্য আলাদা কোয়ালিটি সেটিংস এবং স্পিড কন্ট্রোল।'
  },
  {
    id: '44-video-comments',
    title: 'Comments & Engagement',
    titleBn: 'কমেন্টস ও চ্যাট',
    category: 'video',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/44-video-comments-sheet.png',
    subtitle: 'Read, Reply & Timed Comments',
    subtitleBn: 'টাইমড কমেন্ট ও রিপ্লাই',
    description: 'Tappable timestamps that seek the player immediately; optional timed overlay comments.',
    descriptionBn: 'টাইমস্ট্যাম্পে ক্লিক করলে ভিডিও সরাসরি সেই সময়ে চলে যায়।'
  },
  {
    id: '45-video-save',
    title: 'Save Sheet',
    titleBn: 'সেভ শিট',
    category: 'video',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/45-video-save-sheet.png',
    subtitle: 'Watch Later & Download',
    subtitleBn: 'পরে দেখার তালিকা ও ডাউনলোড',
    description: 'Direct muxed MP4 download - video + audio joined directly to your storage.',
    descriptionBn: 'সরাসরি সম্পূর্ণ অডিও-ভিডিও যুক্ত MP4 ফাইল ডাউনলোড করা যায়।'
  },
  {
    id: '48-library-video',
    title: 'Video Library',
    titleBn: 'ভিডিও লাইব্রেরি',
    category: 'video',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/48-library-video.png',
    subtitle: 'Watch History & Playlists',
    subtitleBn: 'দেখা ভিডিওর ইতিহাস ও প্লেলিস্ট',
    description: 'Tracks your watch history, Watch Later queue, and saved video playlists.',
    descriptionBn: 'আপনার দেখা ভিডিওর ইতিহাস এবং সংরক্ষিত প্লেলিস্ট সহজে খুঁজে নিন।'
  },
  {
    id: '36-video-search',
    title: 'Video Search',
    titleBn: 'ভিডিও সার্চ',
    category: 'video',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/36-search-video-videos.png',
    subtitle: 'Filter By Upload Date & Sort',
    subtitleBn: 'আপলোড তারিখ ও সর্টিং ফিল্টার',
    description: 'Clean video search with channel badges, views count, and duration tags.',
    descriptionBn: 'ভিউ সংখ্যা, চ্যানেলের নাম ও সময়সহ পরিষ্কার সার্চ ফলাফল।'
  },

  // Subscriptions & Accounts
  {
    id: '46-subscriptions-feed',
    title: 'Subscriptions Feed',
    titleBn: 'সাবস্ক্রিপশন ফিড',
    category: 'subscriptions',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/46-subscriptions-feed.png',
    subtitle: 'Latest Uploads Rail',
    subtitleBn: 'নতুন ভিডিওর নিয়মিত ফিড',
    description: 'Follow channels without a Google account; device-local subscriptions merge seamlessly with YouTube accounts.',
    descriptionBn: 'গুগল একাউন্ট ছাড়াই চ্যানেল সাবস্ক্রাইব করুন; ডিভাইসে সুরক্ষিত থাকে।'
  },
  {
    id: '47-manage-subscriptions',
    title: 'Manage Subscriptions',
    titleBn: 'সাবস্ক্রিপশন ব্যবস্থাপনা',
    category: 'subscriptions',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/47-manage-subscriptions-empty.png',
    subtitle: 'Import & Export',
    subtitleBn: 'ইমপোর্ট ও এক্সপোর্ট',
    description: 'Import from NewPipe, PipePipe, Tubular, Google Takeout CSV or OPML in one tap.',
    descriptionBn: 'নিউপাইপ বা গুগল টেকআউট থেকে নিমেষেই সাবস্ক্রিপশন ইম্পোর্ট করুন।'
  },
  {
    id: '21-profiles-signed-out',
    title: 'Anonymous Profiles',
    titleBn: 'বেনামী প্রোফাইল',
    category: 'accounts',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/21-profiles-sheet-signed-out.png',
    subtitle: 'No Account Required',
    subtitleBn: 'লগইন ছাড়াই স্বয়ংসম্পূর্ণ',
    description: 'Koda treats being signed out as a first-class profile with its own recommendations and history.',
    descriptionBn: 'লগইন ছাড়াই সম্পূর্ণ নিজস্ব ফিড ও রেকমেন্ডেশন সিস্টেম সক্রিয় থাকে।'
  },
  {
    id: '49-profiles-multi',
    title: 'Multi-Account Switcher',
    titleBn: 'একাধিক অ্যাকাউন্ট সুইচিং',
    category: 'accounts',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/49-profiles-sheet-signed-in.png',
    subtitle: 'Zero-Lag Switching',
    subtitleBn: 'এক ট্যাপে অ্যাকাউন্ট বদল',
    description: 'Switch between personal and brand YouTube accounts instantly without stopping background music playback.',
    descriptionBn: 'গান বন্ধ না করেই সেকেন্ডের মধ্যে একাধিক অ্যাকাউন্টের মাঝে সুইচ করুন।'
  },
  {
    id: '39-session-cookies',
    title: 'Session Cookie Login',
    titleBn: 'সেশন কুকি লগইন',
    category: 'accounts',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/39-session-cookies-sign-in-sheet.png',
    subtitle: 'Alternative Auth Fallback',
    subtitleBn: 'বিকল্প নির্ভরযোগ্য লগইন',
    description: 'EncryptedSharedPreferences with SAPISIDHASH origin signing. No password leaves the device.',
    descriptionBn: 'পাসওয়ার্ড ছাড়াই নিরাপদ সেশন কুকির সাহায্যে লগইন সুবিধা।'
  },

  // Settings
  {
    id: '22-settings-hub',
    title: 'Settings Hub',
    titleBn: 'সেটিংস হাব',
    category: 'settings',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/22-settings-hub.png',
    subtitle: '11 Organized Categories',
    subtitleBn: '১১টি পরিচ্ছন্ন ক্যাটাগরি',
    description: 'Every setting row shows its live value without needing to click into it.',
    descriptionBn: 'প্রতিটি সেটিংসে না ঢুকেই বাইরে থেকে বর্তমান মান দেখা যায়।'
  },
  {
    id: '24-settings-appearance',
    title: 'Material 3 Theming',
    titleBn: 'ম্যাটেরিয়াল ৩ থিমিং',
    category: 'settings',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/24-settings-appearance.png',
    subtitle: 'AMOLED & Dynamic Colors',
    subtitleBn: 'অ্যামোলেড ও ডায়নামিক কালার',
    description: 'Dynamic wallpaper colors on Android 12+, True Black AMOLED mode, and over 24 curated palettes.',
    descriptionBn: 'অ্যান্ড্রয়েড ১২+ ডায়নামিক কালার এবং পিওর ব্ল্যাক অ্যামোলেড ডিসপ্লে সাপোর্ট।'
  },
  {
    id: '23-settings-color-palette',
    title: 'Color Palette Picker',
    titleBn: 'কালার প্যালেট পিকার',
    category: 'settings',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/23-settings-color-palette.png',
    subtitle: '6 Palette Families',
    subtitleBn: '৬টি নান্দনিক প্যালেট ফ্যামিলি',
    description: 'Vibrant, Pastel, Aesthetic, Earthy, Moody, and Jewel & Mono tone selections.',
    descriptionBn: 'ভাইব্রেন্ট, প্যাস্টেল, এস্থেটিক, আর্থি, মুডি এবং জুয়েল প্যালেটের সমাহার।'
  },
  {
    id: '27-settings-player-styles',
    title: 'Player Style Picker',
    titleBn: 'প্লেয়ার স্টাইল সেটিংস',
    category: 'settings',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/27-settings-player-styles.png',
    subtitle: 'Wireframe Previews',
    subtitleBn: 'ওয়্যারফ্রেম প্রিভিউসহ নির্বাচন',
    description: 'Preview the geometry of all 8 player styles with live wireframe schematics.',
    descriptionBn: 'ওয়্যারফ্রেম ডায়াগ্রাম দেখে পছন্দের প্লেয়ার ডিজাইন নির্বাচন করুন।'
  },
  {
    id: '33-settings-notifications',
    title: 'Android 16 Live Updates',
    titleBn: 'অ্যান্ড্রয়েড ১৬ লাইভ আপডেট',
    category: 'settings',
    url: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/33-settings-notifications.png',
    subtitle: 'Status Bar Chip Notification',
    subtitleBn: 'স্ট্যাটাস বার প্রগ্রেস চিপ',
    description: 'Live progress chip right in the system status bar showing remaining playback and download time.',
    descriptionBn: 'স্ট্যাটাস বারে রিয়েল-টাইম প্রগ্রেস চিপে গান এবং ডাউনলোডের সময় দেখা যায়।'
  }
];

export const PLAYER_STYLES: PlayerStyle[] = [
  {
    id: 'classic',
    name: 'Classic',
    nameBn: 'ক্লাসিক',
    tagline: 'Familiar Transport',
    taglineBn: 'পরিচিত ও সহজ কন্ট্রোল',
    description: 'The definitive everyday music experience. Centered high-resolution cover art, precision waveform timeline, and responsive standard transport buttons.',
    descriptionBn: 'প্রতিদিনের গান শোনার সহজ ও চমৎকার ডিজাইন। কেন্দ্রে স্পষ্ট অ্যালবাম আর্ট এবং দ্রুত কন্ট্রোল।',
    screenshotUrl: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/10-player-classic.png',
    accentColor: '#6750A4',
    features: ['Waveform scrubber', 'Sleep timer with 5s gentle fade', 'Instant Like & Queue', 'Volume & Speed slider']
  },
  {
    id: 'editorial',
    name: 'Editorial',
    nameBn: 'এডিটরিয়াল',
    tagline: 'Two-tone Magazine Layout',
    taglineBn: 'ম্যাগাজিন দুই-টোন লেআউট',
    description: 'Editorial aesthetic inspired by modern music publications. Features die-cut art, word-pill controls, and letter-by-letter live synchronized lyrics.',
    descriptionBn: 'আধুনিক মিউজিক ম্যাগাজিনের আদলে তৈরি। স্পষ্ট কাটআউট আর্ট এবং লাইভ সিঙ্ক হওয়া কারাওকে লিরিক্স।',
    screenshotUrl: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/03-player-editorial.png',
    accentColor: '#E06D53',
    features: ['Die-cut typography', 'Word-pill transport buttons', 'Letter-by-letter synced lyrics', 'Dual-tone contrast']
  },
  {
    id: 'gesture',
    name: 'Gesture',
    nameBn: 'জেসচার',
    tagline: 'Swipeable Carousel',
    taglineBn: 'সোয়াইপযোগ্য ক্যারোসেল',
    description: 'Physical feel that lets you flick horizontally across the upcoming queue. Powered by fluid Android spring physics that tilt the artwork as your finger moves.',
    descriptionBn: 'আঙুল দিয়ে বামে-ডানে সোয়াইপ করে নিমেষেই গান বদলানোর দারুণ স্প্রিং ফিজিক্স।',
    screenshotUrl: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/11-player-gesture.png',
    accentColor: '#1B6C3A',
    features: ['Horizontal queue carousel', 'Reactive 3D tilt on drag', 'Snap-to-center physics', 'Fast queue browsing']
  },
  {
    id: 'canvas',
    name: 'Canvas',
    nameBn: 'ক্যানভাস',
    tagline: 'Full-Bleed Album Art',
    taglineBn: 'ফুল স্ক্রিন অ্যালবাম আর্ট',
    description: 'Minimalist immersion. The album art expands across every pixel of your display. Controls gracefully fade into the background while playing.',
    descriptionBn: 'পুরো ডিসপ্লে জুড়ে ভেসে ওঠে অ্যালবাম আর্ট। গান শুরু হলে নিয়ন্ত্রণগুলো আস্তে করে মিলিয়ে যায়।',
    screenshotUrl: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/12-player-canvas.png',
    accentColor: '#7C4DFF',
    features: ['Edge-to-edge full bleed artwork', 'Auto-dimming controls', 'Swipe-anywhere track skip', 'Ambient glow tint']
  },
  {
    id: 'bento',
    name: 'Bento',
    nameBn: 'বেন্টো গ্রিড',
    tagline: 'Squishy Tonal Tiles',
    taglineBn: 'মডুলার গ্রিড টাইলস',
    description: 'A modular bento grid of flat tonal surfaces. Every button is a squishy tile with spring compression physics that feels delightful to tap.',
    descriptionBn: 'সুন্দর রঙিন টাইলসের সমন্বয়ে গঠিত গ্রিড। বাটনগুলোতে চাপ দিলে দারুণ স্প্রিং প্রেস অনুভূতি দেয়।',
    screenshotUrl: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/13-player-bento.png',
    accentColor: '#00897B',
    features: ['Modular tile layout', 'Tactile spring compression', 'Tonal color elevation', 'Direct sleep timer tile']
  },
  {
    id: 'sticker',
    name: 'Sticker',
    nameBn: 'স্টিকার',
    tagline: 'Die-Cut Drag & Peel',
    taglineBn: 'ড্র্যাগ ও পিল ফিজিক্স',
    description: 'A die-cut physical sticker that you can grab, pull, peel, and fling with squash-and-stretch physics. Playful and utterly tactile.',
    descriptionBn: 'আসল স্টিকারের মতো টেনে নেওয়া, বাঁকানো ও ছুড়ে দেওয়ার মতো আনন্দদায়ক খেলনা ফিজিক্স।',
    screenshotUrl: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/14-player-sticker.png',
    accentColor: '#FF6D00',
    features: ['Peel & stretch physics', 'Custom drop shadow', 'Interactive toy physics', 'Tactile vibration feedback']
  },
  {
    id: 'dial',
    name: 'Dial',
    nameBn: 'ডায়াল',
    tagline: 'Rotary Tick-Ring Scrubber',
    taglineBn: 'রোটারি রিং স্ক্রাবার',
    description: 'A rotary mechanical instrument reminiscent of vintage synthesizers and studio equipment. Rotate the tick-ring with your thumb to scrub time precisely.',
    descriptionBn: 'ভিন্টেজ সিন্থেসাইজারের মতো মেকানিক্যাল রোটারি রিং। বৃদ্ধাঙ্গুল দিয়ে ঘুরিয়ে গানের সেকেন্ড নিখুঁতভাবে নির্ধারণ করুন।',
    screenshotUrl: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/17-player-dial.png',
    accentColor: '#00ACC1',
    features: ['Rotary tick ring', 'Sub-second scrub precision', 'Haptic feedback on notches', 'Retro studio vibe']
  },
  {
    id: 'morph',
    name: 'Morph',
    nameBn: 'মর্ফ',
    tagline: 'Living Hero Shape',
    taglineBn: 'জীবন্ত মরফিং শেপ',
    description: 'Constructed from Material 3 Expressive primitives. The album hero mask continuously shifts through 14 organic geometric shapes while music is playing.',
    descriptionBn: 'ম্যাটেরিয়াল ৩ এক্সপ্রেসাইভ দিয়ে নির্মিত। গান চলার সাথে সাথে অ্যালবাম ফ্রেমটি ১৪টি ভিন্ন আকৃতিতে রূপান্তরিত হতে থাকে।',
    screenshotUrl: 'https://raw.githubusercontent.com/Ivorisnoob/Koda/main/Screenshots/15-player-morph.png',
    accentColor: '#D81B60',
    features: ['14 organic MaterialShapes', '120 spring animation specs', 'Seamless continuous shape shifting', 'Dynamic color reflection']
  }
];

export const DOWNLOAD_OPTIONS: DownloadOption[] = [
  {
    abi: 'arm64-v8a',
    label: 'arm64-v8a Recommended',
    labelBn: 'arm64-v8a প্রস্তাবিত',
    recommended: true,
    filename: 'Koda-arm64-v8a.apk',
    fileSize: '18.4 MB',
    downloadUrl: 'https://github.com/Ivorisnoob/Koda/releases/latest',
    targetDevice: 'Modern 64-bit phones - all devices released since 2017. Highest speed & lowest battery consumption.',
    targetDeviceBn: '২০১৭ সালের পর তৈরি প্রায় সব আধুনিক ৬৪-বিট ফোনের জন্য সেরা ও দ্রুততম।'
  },
  {
    abi: 'universal',
    label: 'Universal APK',
    labelBn: 'ইউনিভার্সাল APK',
    recommended: false,
    filename: 'Koda-universal.apk',
    fileSize: '32.1 MB',
    downloadUrl: 'https://github.com/Ivorisnoob/Koda/releases/latest',
    targetDevice: 'Contains both 64-bit and 32-bit architectures. Recommended if you are unsure which ABI your phone uses.',
    targetDeviceBn: 'সব ডিভাইসে চলে। আপনার ফোনের প্রসেসর সম্পর্কে নিশ্চিত না থাকলে এটি ডাউনলোড করুন।'
  },
  {
    abi: 'armeabi-v7a',
    label: 'armeabi-v7a 32-bit',
    labelBn: 'armeabi-v7a ৩২-বিট',
    recommended: false,
    filename: 'Koda-armeabi-v7a.apk',
    fileSize: '16.9 MB',
    downloadUrl: 'https://github.com/Ivorisnoob/Koda/releases/latest',
    targetDevice: 'Legacy 32-bit devices and older budget Android phones running Android 11+.',
    targetDeviceBn: 'পুরোনো ৩২-বিট প্রসেসরযুক্ত অ্যান্ড্রয়েড ফোনের জন্য উপযুক্ত।'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    icon: 'Radio',
    title: 'Zero API Keys Needed',
    titleBn: 'কোনো অফিশিয়াল API কী প্রয়োজন নেই',
    description: 'High-speed audio & video streaming powered by NewPipe Extractor and direct InnerTube endpoints. No quota limits, no telemetry.',
    descriptionBn: 'কোনো লিমিটেশন ছাড়াই নিউপাইপ এক্সট্র্যাক্টর ও ইনারটিউব দিয়ে সরাসরি আনলিমিটেড মিউজিক ও ভিডিও স্ট্রিমিং।',
    tag: 'Core Engine'
  },
  {
    icon: 'ShieldCheck',
    title: '100% Anonymous & Private',
    titleBn: 'সম্পূর্ণ গোপনীয় ও লগইনবিহীন ব্যবহার',
    description: 'Everything works without signing in: search, streaming, downloads, local playlists, and intelligent recommendations built from an on-device local taste profile.',
    descriptionBn: 'লগইন ছাড়াই সার্চ, স্ট্রিমিং, ডাউনলোড এবং ডিভাইসে তৈরি ব্যক্তিগত স্বাদ প্রোফাইল অনুযায়ী রেকমেন্ডেশন পাবেন।',
    tag: 'Privacy'
  },
  {
    icon: 'Sparkles',
    title: 'Material 3 Expressive',
    titleBn: 'ম্যাটেরিয়াল ৩ এক্সপ্রেসাইভ আর্কিটেকচার',
    description: 'Not merely themed, but built ground-up on Material 3 Expressive with 14 organic shapes, 120 spring physics specs, and dynamic wallpaper color palettes.',
    descriptionBn: '১৪টি অর্গানিক শেপ, ১২০টি স্প্রিং ফিজিক্স এবং আপনার ওয়ালপেপারের সাথে মানানসই ডায়নামিক কালার প্যালেট।',
    tag: 'UI Design'
  },
  {
    icon: 'Layers',
    title: '8 Dynamic Player Styles',
    titleBn: '৮টি অনন্য প্লেয়ার স্টাইল',
    description: 'Switch between Classic, Editorial, Gesture, Canvas, Bento, Sticker, Dial, and Morph layouts anytime via the rotary style wheel.',
    descriptionBn: 'ক্লাসিক, এডিটরিয়াল, ক্যানভাস, জেসচার, বেন্টো, স্টিকার, ডায়াল এবং মরফ স্টাইল যে-কোনো সময় পরিবর্তন করুন।',
    tag: 'Player Engine'
  },
  {
    icon: 'Video',
    title: 'Dual-Mode: Music & Video',
    titleBn: 'ডুয়েল মোড: মিউজিক ও ভিডিও',
    description: 'One tap transforms the entire home feed into a full-featured video experience with up to 2160p60 4K quality, chapters, subtitles, and edge-swipe volume/brightness slats.',
    descriptionBn: 'এক ট্যাপেই পুরো অ্যাপটি ২১৬০p ৪কে ভিডিও প্লেয়ার, চ্যাপ্টার এবং সাইড-সোয়াইপ কন্ট্রোলে পরিণত হয়।',
    tag: 'Dual Experience'
  },
  {
    icon: 'Download',
    title: 'High-Quality Downloads',
    titleBn: 'উচ্চমানের ব্যাকগ্রাউন্ড ডাউনলোড',
    description: 'Downloads whole albums or playlists in one tap. Videos are stitched back into single MP4s and saved directly to Downloads/Koda for easy file management.',
    descriptionBn: 'এক ক্লিকে পুরো অ্যালবাম বা প্লেলিস্ট ডাউনলোড করুন। ফাইলগুলো সাধারণ MP4 হিসেবে আপনার স্টোরেজে সংরক্ষিত থাকে।',
    tag: 'Offline Play'
  },
  {
    icon: 'FastForward',
    title: 'Chunked Ranged Streaming',
    titleBn: 'চ্যাংকড রেঞ্জড স্ট্রিমিং প্রযুক্তি',
    description: 'Bypasses YouTube throttling. The heads of the next 3 tracks are pre-cached in storage, meaning skips start instantly from disk with zero latency.',
    descriptionBn: 'ইউটিউবের স্পিড লিমিট এড়িয়ে পরবর্তী ৩টি গান আগেই ক্যাশে সংরক্ষণ করে রাখে, ফলে গান স্কিপ করলে তৎক্ষণাৎ চালু হয়।',
    tag: 'Performance'
  },
  {
    icon: 'Mic2',
    title: 'Letter-by-Letter Synced Lyrics',
    titleBn: 'শব্দে শব্দে লাইভ কারাওকে লিরিক্স',
    description: 'Offline support with embedded tags and .lrc/.ttml files, plus multi-provider online fallback with smooth syllable-accurate highlighting in every player style.',
    descriptionBn: 'অনলাইন ও অফলাইনে গানের সাথে সাথে নিখুঁত কারাওকে লিরিক্স প্রতিটি প্লেয়ার স্টাইলে সুন্দরভাবে হাইলাইট হয়।',
    tag: 'Karaoke'
  },
  {
    icon: 'Users',
    title: 'Multi-Account & Ghost Profiles',
    titleBn: 'একাধিক অ্যাকাউন্ট ও বেনামী প্রোফাইল',
    description: 'Switch between YouTube accounts in seconds without stopping audio. Create separate device-only profiles with their own subscriptions and blocklists.',
    descriptionBn: 'গান চলাকালীন সেকেন্ডের মধ্যে অ্যাকাউন্ট পরিবর্তন করুন অথবা আলাদা লোকাল প্রোফাইল বজায় রাখুন।',
    tag: 'Profiles'
  }
];

export const ROADMAP_ITEMS = [
  {
    title: 'Android Auto Done Properly',
    titleBn: 'অ্যান্ড্রয়েড অটো পূর্ণাঙ্গ সমর্থন',
    category: 'Reach',
    status: 'In Progress',
    desc: 'Native automotive template engine with seamless distraction-free controls.'
  },
  {
    title: 'Gapless Audio Mode Transition',
    titleBn: 'নিরবচ্ছিন্ন অডিও মোড পরিবর্তন',
    category: 'Playback',
    status: 'Active Track',
    desc: 'Carrying audio playback across video/music switches without dropping buffers.'
  },
  {
    title: 'True Overlapping Crossfade',
    titleBn: 'বাস্তব ওভারল্যাপিং ক্রসফেড',
    category: 'Playback',
    status: 'In Development',
    desc: 'Parallel ExoPlayer audio tracks blending smoothly with customizable curve.'
  },
  {
    title: 'Wear OS & Android TV Companion',
    titleBn: 'ওয়্যার ওএস ও অ্যান্ড্রয়েড টিভি সমর্থন',
    category: 'Reach',
    status: 'Planned',
    desc: 'Remote playback control from your smartwatch and big-screen living room app.'
  },
  {
    title: 'Backup & Restore Without Sign-in Leak',
    titleBn: 'নিরাপদ ব্যাকআপ ও রিস্টোর',
    category: 'Foundations',
    status: 'Shipped',
    desc: 'Full configuration export to encrypted single file without sensitive credentials.'
  }
];

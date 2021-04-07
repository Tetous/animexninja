import {
  AiFillHeart,
  AiFillCalendar,
  AiFillPlayCircle,
  AiFillStar,
} from "react-icons/ai";

import { FcCloseUpMode,} from "react-icons/fc";


export const Discover = [
  {
    index: 1,
    name: "Recently Added",
    link: "/recentlyadded/1",
    icon: AiFillCalendar,
  },
  {
    index: 0,
    name: "Popular",
    link: "/popular/1",
    icon: AiFillStar,
  },
  {
    index: 2,
    name: "My List",
    link: "/myList",
    icon: AiFillHeart,
  },
  {
    index: 3,
    name: "Spring 2021",
    link: "/season",
    icon: FcCloseUpMode,
  },
];

const genrelist = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Dementia",
  "Demons",
  "Drama",
  "Dub",
  "Ecchi",
  "Fantasy",
  "Game",
  "Harem",
  "Historical",
  "Horror",
  "Josei",
  "Kids",
  "Magic",
  "Martial Arts",
  "Mecha",
  "Military",
  "Music",
  "Mystery",
  "Parody",
  "Police",
  "Psychological",
  "Romance",
  "Samurai",
  "School",
  "Sci-Fi",
  "Seinen",
  "Shoujo",
  "Shoujo Ai",
  "Shounen",
  "Shounen Ai",
  "Slice of Life",
  "Space",
  "Sports",
  "Super Power",
  "Supernatural",
  "Thriller",
  "Vampire",
  "Yaoi",
  "Yuri",
];
export var Genre = genrelist.map((name, index) => ({
  index: index,
  name: name,
  link: `/genre/${name.replace(" ", "-")}/1`,
  icon: AiFillPlayCircle,
}));



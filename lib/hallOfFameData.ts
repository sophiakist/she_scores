export type HallAthlete = {
  id: string
  name: string
  sport: string
  years?: string
  blurb?: string
  image?: string
  achievements?: string[]
}

export const HALL_OF_FAME: HallAthlete[] = [
  {
    id: 'h1',
    name: 'Serena Williams',
    sport: 'Tennis',
    years: '1995–2022',
    blurb: 'One of the greatest tennis players of all time with 23 Grand Slam singles titles in the Open Era.',
    image: '/assets/images/hallOfFameImages/serena-williams.jpg',
    achievements: ['23x Grand Slam singles champion', '4x Olympic gold medalist'],
  },
  {
    id: 'h2',
    name: 'Maya Moore',
    sport: 'Basketball',
    years: '2011–2018',
    blurb: 'WNBA champion and MVP who paused her career for social justice advocacy.',
    image: '/assets/images/hallOfFameImages/maya-moore.jpg',
    achievements: ['WNBA MVP', 'WNBA Champion'],
  },
  {
    id: 'h3',
    name: 'Sue Bird',
    sport: 'Basketball',
    years: '1999–2013',
    blurb: 'College and professional standout, known for leadership and clutch play.',
    image: '/assets/images/hallOfFameImages/sue-bird.jpeg',
    achievements: ['WNBA champion', 'NCAA champion'],
  },
  {
    id: 'h4',
    name: 'Alex Morgan',
    sport: 'Soccer',
    years: '2010–2025',
    blurb: 'Key player in the US Women\'s National Team with multiple World Cup and Olympic titles.',
    image: '/assets/images/hallOfFameImages/alex-morgan.jpg',
    achievements: ['FIFA Women\'s World Cup Champion', 'Olympic Gold Medalist'],
  },
  {
    id: 'h5',
    name: 'Megan Rapinoe',
    sport: 'Soccer',
    years: '2006–2024',
    blurb: 'Renowned for her skill on the field and activism off it, including winning the Ballon d\'Or Féminin.',
    image: '/assets/images/hallOfFameImages/megan-rapinoe.png',
    achievements: ['Ballon d\'Or Féminin', 'FIFA Women\'s World Cup Champion'],
  },
  {
    id: 'h6',
    name: 'Mia Hamm',
    sport: 'Soccer',
    years: '1987–2004',
    blurb: 'Pioneer in women\'s soccer, former all-time leading scorer for the USWNT.',
    image: '/assets/images/hallOfFameImages/mia-hamm.jpg',
    achievements: ['2x FIFA Women\'s World Cup Champion', '2x Olympic Gold Medalist'],
  },
  {
    id: 'h7',
    name: 'Billie Jean King',
    sport: 'Tennis',
    years: '1959–1983',
    blurb: 'Trailblazer for gender equality in sports and winner of 39 Grand Slam titles.',
    image: '/assets/images/hallOfFameImages/billie-jean-king.jpg',
    achievements: ['39x Grand Slam titles', 'Founder of the WTA'],
  },
  {
    id: 'h8',
    name: 'Florence Griffith Joyner',
    sport: 'Track and Field',
    years: '1980–1996',
    blurb: 'Holds the world records for the 100m and 200m sprints, known for her speed and style.',
    image: '/assets/images/hallOfFameImages/florence-griffith-joyner.jpg',
    achievements: ['3x Olympic Gold Medalist', 'World Record Holder in 100m and 200m'],
  },
  {
    id: 'h9',
    name: 'Allyson Felix',
    sport: 'Track and Field',
    years: '2003–2021',
    blurb: 'Most decorated American track and field athlete with 11 Olympic medals.',
    image: '/assets/images/hallOfFameImages/allyson-felix.jpg',
    achievements: ['11x Olympic Medalist', 'World Champion in 200m and 400m'],
  },
  {
    id: 'h10',
    name: 'Abby Wambach',
    sport: 'Soccer',
    years: '2001–2015',
    blurb: 'All-time leading scorer for the USWNT and two-time Olympic gold medalist.',
    image: '/assets/images/hallOfFameImages/abby-wambach1.jpg',
    achievements: ['FIFA Women\'s World Cup Champion', 'Olympic Gold Medalist'],
  },
  {
    id: 'h11',
    name: 'Lindsey Vonn',
    sport: 'Skiing',
    years: '2000–2019',
    blurb: 'One of the most successful female ski racers in history with multiple World Cup titles.',
    image: '/assets/images/hallOfFameImages/lindsey-vonn.jpg',
    achievements: ['4x World Cup Overall Champion', 'Olympic Gold Medalist'],
  },
  {
    id: 'h12',
    name: 'Diana Taurasi',
    sport: 'Basketball',
    years: '2004–2024',
    blurb: 'WNBA all-time leading scorer and multiple-time champion known for her scoring ability and leadership.',
    image: '/assets/images/hallOfFameImages/diana-taurasi.jpg',
    achievements: ['WNBA Champion', 'Olympic Gold Medalist'],
  }
]

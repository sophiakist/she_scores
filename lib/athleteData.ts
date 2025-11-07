export type athlete = {
  id: string
  name: string
  sport: string
  team: string
  blurb: string
  image: string
  stats: { label: string; value: string }[]
}

export const ATHLETES: athlete[] = [
  {
    id: '1',
    name: 'Paige Bueckers',
    sport: 'Basketball',
    team: 'Dallas Wings',
    blurb: 'Paige is known for her exceptional court vision and scoring ability, leading her team to multiple championships.',
    image: '/assets/images/aotw-images/paige-bueckers.jpg',
    stats: [
      { label: 'PPG', value: '20.1' },
      { label: 'APG', value: '6.3' },
      { label: 'RGP', value: '5.4' },
    ],
  },
]
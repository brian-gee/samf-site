export type ResponseData = Concert[]

export interface Concert {
  title: string
  artists: Artist[]
  location: string
  concertDate: ConcertDate
  body: string
  img: Img
  program: Program[]
}

export interface Artist {
  name: string
  instrument: string | null
  img?: Img
}

export interface ConcertDate {
  dayName: string
  month: string
  dayNumber: string
  year: string
  time: string
}

export interface Program {
  composer: string
  pieces: string[]
}

export interface Img {
  url: string
  alt: string
  class: string[]
}

export async function get() {
  return {
    body: JSON.stringify([
      {
        title: 'Juneteenth Recognition Concert',
        artists: [
          {
            name: 'The Ritz Chamber Players',
            instrument: null,
            img: { url: '/event-assets/ritz.jpg', alt: 'The Ritz Chamber Players', class: [`w-[300px]`, 'h-[300px]'] },
          },
          {
            name: 'Ann Marie McPhail',
            instrument: 'Soprano',
            img: { url: '/event-assets/ann-marie-mcphail.png', alt: 'Ann Marie McPhail, Soprano', class: [`w-[200px]`, 'h-[300px]'] },
          },
        ],
        location: 'Location needed.',
        concertDate: {
          dayName: 'Saturday',
          month: 'May',
          dayNumber: '20',
          year: '2023',
          time: '7:30 P.M.',
        },
        body: 'The Ritz Chamber Players will perform a concert in recognition of Juneteenth. The concert will feature music by African American composers.',
        img: {
          url: '/event-assets/juneteenth-placehold.png',
          alt: 'Juneteenth Recognition Concert',
          class: [`w-[500px]`, 'h-[250px]']
        },
        program: [
          {
            composer: 'Samuel Colridge-Taylor',
            pieces: ['5 Fantasiestücke for String Quartet, Op.5 '],
          },
          {
            composer: 'Coleridge-Taylor Perkinson',
            pieces: ['String Quartet No. 1, "Calvary"'],
          },
          {
            composer: 'Traditional',
            pieces: [
              'O Freedom',
              "No Mo' Auction Block for Me",
              'Lift Every Voice and Sing',
              'John Henry',
              "Froggie Went a Courtin'",
              'No Harm',
              'Sometimes I Feel Like a Motherless Child',
              'Soon I Will Be Done',
              'Plenty Good Room',
            ],
          },
        ],
      },
    ]),
  }
}

export interface responseData {
  title: string
  userId: number
  body: string
}

export interface Artist {
  name: string
  instrument: string | null
}

export async function get() {
  return {
    body: JSON.stringify([
      {
        title: 'Juneteenth Recognition Concert',
        artists: [
          { name: 'The Ritz Chamber Players'},
          { name: 'Ann Marie McPhail', instrument: "Soprano"}
        ],
      },
    ]),
  }
}

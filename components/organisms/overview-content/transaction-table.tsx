import React from 'react'
import TableRow from './table-row'

const DATA = [
  {
    id       : 1,
    image    : '/img/overview-1.png',
    title    : 'Mobile Legends: The New Battle 2021',
    category : 'Desktop',
    item     : 200,
    price    : 290000,
    status   : 'Pending'
  },
  {
    id       : 2,
    image    : '/img/overview-2.png',
    title    : 'Call of Duty:Modern',
    category : 'Desktop',
    item     : 550,
    price    : 740000,
    status   : 'Success'
  },
  {
    id       : 3,
    image    : '/img/overview-3.png',
    title    : 'Clash of Clans',
    category : 'Desktop',
    item     : 100,
    price    : 120000,
    status   : 'Failed'
  },
  {
    id       : 4,
    image    : '/img/overview-4.png',
    title    : 'The Royal Game',
    category : 'Mobile',
    item     : 225,
    price    : 250000,
    status   : 'Pending'
  }
]

export default function TransactionTable() {
  return (
    <table className="table table-borderless">
      <thead>
        <tr className="color-palette-1">
          <th className="text-start" scope="col">Game</th>
          <th scope="col">Item</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {
          DATA.map((row) => (
            <TableRow
              key={ row.id }
              image={ row.image }
              title={ row.title }
              category={ row.category }
              item={ row.item }
              price={ row.price }
              status={ row.status }
            />
          ))
        }
      </tbody>
    </table>
  )
}

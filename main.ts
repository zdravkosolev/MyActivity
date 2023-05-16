// https://jsonplaceholder.typicode.com/users

const tableBody = document.querySelector('#table tbody') as HTMLTableElement

type UserType = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

function createAndRenderRow ({
  id,
  name,
  username,
  email,
  company: { name: companyName }
}: UserType) {
  tableBody!.innerHTML += `<tr>
                                <td>${id}</td>
                                <td>${name}</td>
                                <td>${username}</td>
                                <td>${email}</td>
                                <td>${companyName}</td>
                            </tr>`
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((users: UserType[]) => {
    tableBody!.innerHTML = ''
    users.forEach(createAndRenderRow) 
  })



const allTh = document.querySelectorAll(
  '#table thead th'
) as NodeListOf<HTMLTableElement>

allTh.forEach((th, idx) => {
  const span = document.createElement('span')

  th.append(span)
  th.addEventListener('click', function () {
    allTh.forEach(header => {
      const sp = header.querySelector('span')
      if (sp) {
        sp.innerHTML = ''
      }
    })

    const isAsc = span.classList.contains('asc')

    span.textContent = isAsc ? '▲' : '▼'
    span.classList.remove('dsc', 'asc')
    span.classList.add(isAsc ? 'dsc' : 'asc')

    sortTable(isAsc, idx)
  })
})

function sortTable (isAsc: boolean, idx: number) {
  const rows = [...tableBody!.querySelectorAll('tr')]
  
  const sortedRows = rows.sort((a, b) => {
    const aa = a.children[idx].textContent as string
    const bb = b.children[idx].textContent as string

    if (idx === 0) {
      return isAsc ? +aa - +bb : +bb - +aa
    } else {
      return isAsc ? aa?.localeCompare(bb) : bb?.localeCompare(aa)
    }
  })

  tableBody!.innerHTML = ''

  tableBody!.append(...sortedRows)
}


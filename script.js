let elem =[ 
    "салам", "дос", "үй", "мектеп", "китеп", "шаар", "айыл", "тоо", "суу", "аба", "күн", "ай", "жол", "убакыт", "жумуш", "акча", "тамак", "сабак", "балдар", "адам", "жүрөк", "ой", "тил", "жашоо", "келечек"
]

elem.forEach(element =>{
    let li = document.createElement('li')
    li.innerHTML = element
    li.className = 'list'
    document.body.append(li)
})
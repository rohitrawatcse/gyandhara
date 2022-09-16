let number = 5
document.getElementById('number').addEventListener('change',(e) => {
    number = document.getElementById('number').value
})
 
document.getElementById('button').addEventListener('click',(e) => {
    e.preventDefault()
 
    let counter = 20
 
    let parentDiv = document.getElementById('parent')
 
    for(let i=1;i<=number;i++){
        let div = document.createElement('div')
        div.classList.add('card')
        let img = document.createElement('img')
        img.setAttribute('src',`https://picsum.photos/id/${counter}/600/300`)
        div.appendChild(img)
        let h2 = document.createElement('h2')
        h2.innerText = "Card Title"
        div.appendChild(h2)
        let p = document.createElement('p')
        p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus,.'
        div.appendChild(p)
        counter = counter + 20
        parentDiv.appendChild(div)
        document.body.appendChild(parentDiv)
    }
})
 
document.getElementById('delete').addEventListener('click',(e) => {
 
    e.preventDefault()
 
    let parentdiv = document.getElementById('parent')
 
    for(let i=0;i<number;i++){
        parentdiv.children[0].remove()
    }
 
})
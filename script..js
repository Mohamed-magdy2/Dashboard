const toggle = document.querySelector('.toggle')

const navigation = document.querySelector('.navigation')

// toggle

// toggle.onclick = () =>{
//     navigation.classList.toggle('active')
// }


// hover Class on Selected list item

const list = document.querySelectorAll('.navigation li')
console.log(list[0]);
function activeLink() {
    list.forEach(item =>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
        
    }
    list.forEach(item => {
        item.addEventListener('mouseover',activeLink)
    })








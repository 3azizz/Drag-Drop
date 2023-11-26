let  add = document.getElementById('add');
let  inp = document.getElementById('inp');
let boxes = document.querySelectorAll('.box');
let drag = null;



add.onclick = function(){
    
    if(inp.value !=''){
    boxes[0].innerHTML += `
        <p class="item" draggable="true">${inp.value}<p/>
        `
        inp.value=''
    }

    dragItem();

}

function dragItem(){

    let items = document.querySelectorAll('.item');
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
            drag = item;
            item.style.opacity = '0.5';
        }
        )
    })

    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
        }
        )

        item.addEventListener('dragend',function(){
            drag=null;
            item.style.opacity = '1';
        })

        boxes.forEach(box=>{
            box.addEventListener('dragover', function(e){
                e.preventDefault()
                this.style.background = '#317873';
                this.style.color= '#000'
            })
        })

        boxes.forEach(box=>{
            box.addEventListener('dragleave', function(){
                this.style.background = '#317873';
                this.style.color= '#000'
            })

            box.addEventListener('drop', function(){
                box.append(drag)
            })
        })
    })
}
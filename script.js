var additemid = 0;
function addtocart(item) {
    additemid += 1;
    var selecteditem = document.createElement('div');
    selecteditem.classList.add('cartimg');
    selecteditem.setAttribute('id', additemid);
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;
    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
    var delbtn = document.createElement('button');
    delbtn.innerText = 'Clear';
    delbtn.onclick = function(){
      selecteditem.remove();
    }
    var cartitems = document.getElementById('title');
    selecteditem.append(title);
    selecteditem.append(label);
    selecteditem.append(delbtn);
    cartitems.append(selecteditem);

    }

function del(item){
  document.getElementById(item).remove();
}

// The item creator makes sure that all necessary information are present and valid. 
let ItemCreator = {
  init: function(itemName, category, quantity) {
    this.SKUcode = this.skuGenerator(itemName, category);
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
  },

  skuGenerator: function(name, cat) {
    let result = [];
    let count = 0;
    for (let i = 0; count < 3; i += 1) {
      if (name[i] !== ' ') {
        result.push(name[i]);
        count += 1;
      } 
    }
    result.push(cat.slice(0, 2));
    return result.join('');
  }

}


function ItemManager() {
  
}

ItemManager.allItems = []

ItemManager.create = function(itemName, category, quantity) {
  if (this.isValid(itemName, category, quantity)) {
    let newItem = Object.create(ItemCreator);
    newItem.init(itemName, category, quantity);
    ItemManager.allItems.push(newItem);
  } else {
    return false
  }
  
}

ItemManager.isValid = function(name, cat, quant) {
  if (name.match(/[A-Z0-9]/ig).length >= 5 && cat.match(/[\w]/ig).length >= 5 && cat.match(/[\s]/ig) === null && quant !== undefined) {
    return true;
  } else {
    return false
  }
}

ItemManager.update = function(skuCode, newObject) {
  for(let i = 0; i < this.allItems.length; i += 1) {
    if (this.allItems[i].SKUcode === skuCode) {
      let existingObject = this.allItems[i];
      Object.keys(newObject).forEach(function(aKey) {
        existingObject[aKey] = newObject[aKey]
      });
      return
    }
  }
}

ItemManager.delete = function(skuCode) {
  let list = this.allItems;
  let newList = []
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].SKUcode !== skuCode) {
      newList.push(list[i]);
    }
  }
  this.allItems = newList;
}

ItemManager.items = function() {
  this.allItems.forEach(obj => console.log(obj));
}

ItemManager.create('gilles', 'Random', 3);
ItemManager.create('Paavo', 'Uberfieuke', 7);
ItemManager.update('gilRa', {quantity: 4});
// ItemManager.delete('PaaUb')
ItemManager.items();


let ReportManager = {

}
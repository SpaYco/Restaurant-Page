export class Menu {

    lists = [
        [{
                'name': 'Two Farm Fresh Eggs Any Style',
                'desc': 'Your choice of bacon, sausage or ham <br> Served with roast potatoes, baked tomato and toast',
                'price': '$11'
            },
            {
                'name': 'Continental',
                'desc': 'Selection of homemade breakfast breads, croissants and Danish, seasonal fruit and Greek yogurt',
                'price': '$11'
            },
            {
                'name': 'Buttermilk Pancakes',
                'desc': 'Three pancakes, apple and rhubarb preserve, pure maple syrup, your choice of a side',
                'price': '$12'
            },
            {
                'name': 'Three Egg Omelet',
                'desc': 'Choice of ham, mushroom, sweet pepper, tomato, onion, cheddar cheese <br> Served with roast potatoes, baked tomato and toast',
                'price': '$12'
            },
            {
                'name': 'Toasted Bagel with Smoked Salmon',
                'desc': 'Served with herb cream cheese, pickled red onion, citrus salad',
                'price': '$14'
            },
            {
                'name': 'Briars Breakfast Pizza',
                'desc': 'Toasted English muffin, scrambled eggs, bacon, tomato and cheddar cheese',
                'price': '$12'
            },
            {
                'name': 'French Toast',
                'desc': 'Served with pure maple syrup and vanilla butter, your choice of a side',
                'price': '$11'
            },
            {
                'name': 'Hot Oatmeal',
                'desc': 'Bruleed bananas, raisins and brown sugar, served with seasonal fruit and toast',
                'price': '$9'
            },
            {
                'name': 'Fresh Fruit Plate',
                'desc': 'Served with homemade lemon bread and cottage cheese',
                'price': '$12 '
            }

        ],
        [{
                'name': 'Briars Signature Beef Burger',
                'desc': 'Homestyle beef burger, aged cheddar, crisp bacon, fries',
                'price': '$17'
            },
            {
                'name': 'Crisp Half Chicken GF',
                'desc': 'Boiled fingerling potatoes, cauliflower gratin, spinach, thyme jus',
                'price': '$24'
            },
            {
                'name': 'Braised Lamb Shank GF',
                'desc': 'Boiled fingerling potatoes, cauliflower gratin, spinach, peppercorn rosemary jus',
                'price': '$25'
            },
            {
                'name': 'Fish and Chips',
                'desc': 'Beer battered haddock, fries, coleslaw, homemade tartar sauce',
                'price': '$17'
            },
            {
                'name': 'Grilled Salmon GF',
                'desc': 'Chickpeas, Romaine, radish, tomato, edamame, white balsamic dressing, pickled onion, lemon aioli',
                'price': '$25'
            },
            {
                'name': 'Vegetarian Curry GF',
                'desc': 'Cauliflower, chickpeas, lentils and tomato, basmati rice, raita',
                'price': '$15'
            },
            {
                'name': 'Steak Frites',
                'desc': '9 oz striploin steak, marrow herb butter, fried onions, baked tomato',
                'price': '$29'
            }
        ],
        [{
                'name': 'Caesar Salad',
                'desc': 'Padano cheese, croutons and pancetta Homemade horseradish and olive Caesar dressing',
                'price': '$17'
            },
            {
                'name': 'Roasted Tomato Soup',
                'desc': 'Homemade focaccia',
                'price': '$9'
            },
            {
                'name': 'Spinach salad',
                'desc': 'Cod and scallion crab cakes, avocado, Dijon honey dressing, grilled sweet peppers',
                'price': '$17'
            },
            {
                'name': 'Chocolate Torte',
                'desc': 'Fresh cream and berries',
                'price': '$10'
            },
            {
                'name': 'Rum Cheesecake',
                'desc': 'Mango puree, fresh berries, and cream',
                'price': '$10'
            },
            {
                'name': 'Fresh Berries',
                'desc': 'Homemade biscotti',
                'price': '$10'
            },
        ], 
    ]
    render = (num) => {
        const table = document.getElementById('table')
        const list = this.lists[num]
        table.style.opacity = '0'
        table.innerHTML = ''
        for (let i = 0; i < list.length; i += 1) {
            table.innerHTML += `
        <tr>
          <td>${list[i]["name"]}</td>
          <td>${list[i]["desc"]}</td>
          <td>${list[i]["price"]}</td>
        </tr>`
        }
        const first = document.getElementById('first')
        const second = document.getElementById('second')
        const third = document.getElementById('third')
        first.classList.remove("active-btn");
        second.classList.remove("active-btn");
        third.classList.remove("active-btn");
        if (num == 0) {
            first.classList.add("active-btn");
        } else if (num == 1){
            second.classList.add("active-btn");
        }else{
            third.classList.add("active-btn");
        }
        
        setTimeout(function(){ table.style.opacity = '1'; }, 350)
    }
    add = () => {
        const content = document.getElementById('content')
        content.innerHTML = `<ul id="menu">
    <li id="first" class="active-btn" onclick="change(0)">Breakfast</li>
    <li id="second" onclick="change(1)">Mains</li>
    <li id="third" onclick="change(2)">Starters/Desserts</li>
</ul>
<div id="list">
    <table class="centered highlight">
        <thead>
          <tr>
              <th>Name</th>
              <th>Item Name</th>
              <th>Item Price</th>
          </tr>
        </thead>

        <tbody id="table">
        </tbody>
      </table>
</div>`;
    }
}

export default Menu
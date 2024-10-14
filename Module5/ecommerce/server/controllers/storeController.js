

const getCategories = async (req, res) => {

    let categories = await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {

        const map1 = new Map();

        for(let item of json)
        {
            if(map1.has(item.category)){
                map1.set(item.category, map1.get(item.category) + 1)
            }
            else{
                map1.set(item.category, 1)
            }
        }

        return Array.from( map1.keys() );
    });

    res.status(200);
    res.json(categories);
  };

  
const getItems = async (req, res) => {

    category =  req.query.category;
    features = req.query.features;
    order = req.query.order;

    let items = await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => {

        const lItems = new Array;

        json.forEach((item) => {
            if((!category || (category == item.category)) 
             && (!features || item.title.includes(features))
          )
            lItems.push(item);
          }
          );  

          if(order)
          {
            if(order.startsWith('byPrice')){

              if(order.endsWith('↑')){
                                
                lItems.sort((a,b) => a.price - b.price);

              }
              else if(order.endsWith('↓')){
                
                lItems.sort((a,b) => b.price - a.price);

              }
            }
            else if(order.startsWith('byTitle')){
              console.log(order);

              if(order.endsWith('→')){
                
                lItems.sort((a,b) =>  {
                  if (a.title < b.title) {
                    return -1;
                  }
                  if (a.title > b.title) {
                    return 1;
                  }
                  return 0;
                });

              } 
              else if(order.endsWith('←')){
                
                lItems.sort((a,b) =>  {
                  if (a.title > b.title) {
                    return -1;
                  }
                  if (a.title < b.title) {
                    return 1;
                  }
                  return 0;
                });

              }
            }

          }


          return lItems;
    });


    res.status(200);
    res.json(items);
  };


module.exports = {
    getCategories,
    getItems
  };
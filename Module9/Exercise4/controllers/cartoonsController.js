


let url = "https://api.sampleapis.com/cartoons/cartoons2D";

const getCartoons = async (req, res)=>{
    
  await fetch("https://api.sampleapis.com/cartoons/cartoons2D")
    .then((response) => response.json())
    .then((json) => {
        res.send({ result: 200, data: json });
    })
    .catch((err) => {      
      res.send({ result: 500, error: err.message });
    });
}

const getCartoon = async (req, res)=>{

    let lcartoon = req.query.cartoon.replace("\"", "").replace("\"", "").replace("\'", "").replace("\'", "").toLowerCase();  
    
    await fetch("https://api.sampleapis.com/cartoons/cartoons2D")
      .then((response) => response.json())
      .then((json) => {
        const lfindCartoon = json.find((item) => item.title.toLowerCase().includes(lcartoon));

        res.send({ result: 200, data: lfindCartoon });
      })
      .catch((err) => {      
        res.send({ result: 500, error: err.message });
      });
  }



module.exports = {
    getCartoons,
    getCartoon
};

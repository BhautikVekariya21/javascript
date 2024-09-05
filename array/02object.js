const zucchini = {}
zucchini.id="zucch11"
zucchini.name="yellow zucchinni"
zucchini.contain=true

// console.log(zucchini);

const kale = {
    email: "kale@kale.com",
    fullname: {
        userfullname: {
            firstname: "kale",
            lastname: "Brassica oleracea var. sabellica"
        }
    }
}
// console.log(kale.fullname.userfullname.lastname);

const veg1= {1:"Artichoke",2:"Arugula",3:"Asparagus",4:"Bell Peppers"}

const veg2= {5:"Beet Greens",6:"Beets",7:"Bok Choy",8:"Broccoli"}

const veg3= {9:"Broccoli Rabe",10:"Brussels Sprouts",11:"Butternut Squash",12:"Cabbage (Green)"}

const veg4= {13:"Cabbage",14:"Carrots",15:"Cauliflower",16:"Celery"}

const veg5= {17:"Chives",18:"Collard Greens",19:"Crookneck Squash",20:"Daikon Radish"}

const veg6= {21:"Dandelion Greens",22:"Eggplant ",23:"Endive",24:"Jicama"}

const veg7= {25:"Green Onion",26:"Kohlrabi",27:"Shallots",28:"Spinach"}

const veg8 = { veg1, veg2 }
const veg9 = Object.assign({}, veg1, veg2, veg4)

// console.log(veg8);
// console.log(veg9);
const veg10 ={...veg1,...veg2 }

const user =[
    {
        ket:11,
        name:'Tomatoes'
    },
    {
        ket:21,
        name:"Turnips"
    },
    {
        ket:41,
        name:'Spinach'
    },
]
console.log(user);
console.log(user[1].name);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(zucchini.hasOwnProperty('conatain'));


const smb = Symbol("8923245");

const vocal = {
    name :"carrot",
    "scientific name":"Daucus carota",
    location:"china",
    [smb]:"boiling",
    price:90,
    email:"carrot@carrot.com",
    containnow:false,
    majorproducer:["china","russia","us"],
    season:"winter"
}

const {majorproducer} = vocal;
console.log(majorproducer);

const {majorproducer:largestproducer} = vocal;
console.log(largestproducer);

const {location:loaclity} = vocal;
console.log(loaclity);

const {season:seasonal} = vocal;
console.log(seasonal);
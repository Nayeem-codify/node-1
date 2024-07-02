function hello (){
    console.log("this is global Scope");
}

const objs = {
    key: 1,
    home: "Hi",
    sayHallo: function(){
        console.log(this);
         console.log(`the key is : ${this.key} home : ${this.home}`);
    }
}

objs.sayHallo()

const obj = {
  Name: "Mern2306",
  Department: "Web & Devlopment",
  Studentname: [
    "Rafi" , "Dipto" , "Bijoy" , "Nayeem"
  ],
  mentors: {
    Name: "Nayeem Islam",
    FacultyMember: ["Yousha" , "siam" , "Foysal" , "Shuvo" , "Nafis", "Nafisa"],
    sayFacultyNameFull: function(){
      let Facult = this.FacultyMember
      const x = Facult.map((item, index, arr) => {
        if(item === "Nafisa"){
          return(`${item} Madam`);
        }else{
          return(`${item} sir`);
        }
      })
      console.log(x);
      console.log(this.FacultyMember);
    },
    quality: {
         name: "quality department",
         responsibility: [
          {
             id:1,
             workflow: "good"
          },
          {
            id:2,
             workflow: "bad"
          },
          {
            id:3,
             workflow: "very bad",
             veryBadWorkTitle : function() {
                 return this.workflow
          }
        }
      ],
      response: function () {
        return this.responsibility
      }
    }
  }
}

function addvat (price = 10 , vat = 4){
  const includeVhat = (price * vat) / 100;
  const vatWithPrice = parseInt(price + includeVhat);
  return vatWithPrice;
}

function discount ( priceWithVat = 50 , discountAmount = 10 ) {
  const makeDiscount  = (priceWithVat * discountAmount) / 100;
  return makeDiscount
}

function displayPrice () {
  
}
const productPrice = 500;
vat = 6;
const discounPercentage = 50;


const priceWithVat = addvat(productPrice , vat);

const discountPrice = discount( priceWithVat , discounPercentage );
displayPrice( productPrice ,  vat , discounPercentage , priceWithVat , discountPrice)



let returnValue = obj.mentors.quality.response();
console.log(returnValue);
console.log(returnValue[returnValue.length -1].workflow);
console.log(obj.mentors.quality.responsibility[2].veryBadWorkTitle());
console.log(obj.Department)
console.log(obj.Studentname[3]);
console.log(obj.mentors.sayFacultyNameFull());  
// 1.20.00git branch -M main

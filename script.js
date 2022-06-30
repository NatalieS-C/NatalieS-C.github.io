/* .js files add interaction to your website */
var displayMessage = document.getElementById("message");

var inputBtn = document.getElementById("inputBtn");

if(inputBtn) {
  inputBtn.addEventListener("click", displayCompleteMessage);
}


/*FACT GENERATOR*/
var factList = [
  "A misconception is that very few americans are without insurance. This is absolutely not true. Every four years, the U.S. Census Bureau determines that more and more Americans do not have health insurance. Most recently, that number was as high as 41 million, meaning that one out of every seven Americans are uninsured. Most of these are women, children, and minorities", /*0*/
  "The Number of Americans Without Insurance Has Not Increased In 10 Years! Actually, the number of uninsured people in the United States has increased by nearly ten million since the 1990's. Even worse, that number continues to rise by the millions nearly every year.", /*1*/
  "Most People Who Are Uninsured Are Also Unemployed! Again, not true. Nearly 80% of uninsured Americans have jobs or are in working families. They lack health insurance for one of two reasons: their employers don't offer it, or their employers do offer it but the employees can't afford to pay their portion of the premium.",/*2*/
  "People Without Health Insurance Will Still Get Timely Care! This a very common belief, but also very untrue. People who don't have health insurance will often delay going to be cared for until they are seriously ill. Statistics show that they end up dying younger than those with health insurance. Secondly, hospitals have certain criteria for a patient without insurance before they are attended to; Their health condition has to be on the verge of being deadly, unless they are a child.", /*3*/
  "Other Countries Don't Have Affordable Health Insurance Options Either! Filmmaker Michael Moore proved this one wrong in his 2007 documentary Sicko. In the film, he investigated the health care systems in Canada, Britain, and France - and found that most people living in those countries either had affordable or universal health plans. This means that it was either very cheap or free.", /*4*/
  "Uninsured People Don't Affect Insured People! When millions of people don't have affordable health insurance, everyone is affected - even those who are insured. It is often the insured that end up paying for the uninsured to be cared for. Whether they realize this or not, it's often incorporated into their own hospital bills - which is why they are generally so high. In addition, insured patients can find themselves waiting hours to be cared for because of sickly uninsured patients who are occupying the emergency rooms and hospital beds.", /*5*/
  "Most People Without Health Insurance Are Irresponsible Young People! Not true. 75% of adults that are uninsured happen to be age 25 and older. Even worse, Americans adults that are age 25-65 are one of the fastest growing groups in the country that don't have affordable health insurance."
];

var fact = document.getElementById("fact");
var generateFactButton = document.getElementById("generateFactButton");
var count = 0;

if (generateFactButton) {
  generateFactButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
  }


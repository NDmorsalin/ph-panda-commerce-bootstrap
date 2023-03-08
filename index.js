// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা।

// select all h2 tags and make it lightblue

const h2Tags = document.getElementsByTagName("h2");

for (const h2 of h2Tags) {
  // console.log(h2);
  h2.style.color = "lightblue";
}

// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা।

const backpack = document.getElementById("backpack");
backpack.style.backgroundColor = "tomato";

// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা

const cards = document.querySelectorAll(".card");

for (const card of cards) {
  card.style.borderRadius = "30px";
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো

function showOnConsole() {
  console.log(this);
}

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে card টা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো।

for (const card of cards) {
  const btn = card.querySelector(".btn");
  btn.addEventListener("click", function () {
    card.remove();
  });
}

// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

// input filed
const exampleInputEmail1 = document.getElementById("exampleInputEmail1");
const getInTouch = document.querySelector("#git");
"adfa".includes;
exampleInputEmail1.addEventListener("keyup", function (event) {
  if (event.target.value.includes("email")) {
    getInTouch.removeAttribute("disabled");
  } else {
    getInTouch.setAttribute("disabled", true);
  }
});

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে।

const imgChange = document.querySelector("#img-change");

imgChange.addEventListener("mouseenter", function (event) {
  imgChange.setAttribute("src", "./images/shoes/shoe-1.png");
});

imgChange.addEventListener("mouseleave", function (event) {
  imgChange.setAttribute("src", "./images/bags/bag-2.png");
});

// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 

const subscribe = document.getElementById('subscribe')

subscribe.addEventListener('dblclick',function(){
  subscribe.style.backgroundColor = 'green'
})
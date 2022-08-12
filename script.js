let blogArray = [];

// /* Add New Post Btn Action Start

const addNewPost = document.querySelector("#addNewPost");
const newPostForm = document.querySelector("#newPostForm");

const newPost = () => {
  newPostForm.classList.toggle("newPostFormView");
  newPostForm.classList.toggle("newPostForm");
};

addNewPost.addEventListener("click", newPost);

// /* End Of Add New Post Btn Action

// /* Add New Post Submit Btn Action Start

const blogBox = document.getElementById("blogBox");
const blogImgInput = document.getElementById("blogImgInput");
const blogTitleInput = document.getElementById("blogTitleInput");
const blogDetailsInput = document.getElementById("blogDetailsInput");
const blogTagInput = document.getElementById("blogTagInput");

const blogImgOutput = document.getElementById("blogImgOutput");

const blogTitleOutput = document.getElementById("blogTitleOutput");

const blogDetailsOutput = document.getElementById("blogDetailsOutput");

const blogTagOutput = document.getElementById("blogTagOutput");

blogImgInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      blogImgOutput.setAttribute("src", this.result);
      localStorage.setItem("Image", this.result);
    });
    reader.readAsDataURL(file);
  }
});

// -- BlogTitle Setting

const submitBtn = document.querySelector("#submitBtn");

const submitPost = () => {
  blogBox.classList.add("blogBoxVisible");

  // ` All Input value
  const blogTitle = blogTitleInput.value;
  const blogDetails = blogDetailsInput.value;
  const blogTag = blogTagInput.value;

  // ` All Output value
  blogTitleOutput.innerHTML = `${blogTitle}`;
  blogDetailsOutput.innerHTML = `${blogDetails}`;
  blogTagOutput.innerHTML = `${blogTag}`;

  blogArray.push(blogTitle);
  blogArray.push(blogDetails);
  blogArray.push(blogTag);

  console.log(blogArray);

  localStorage.setItem("blogTitle", blogTitle);
  localStorage.setItem("blogDetails", blogDetails);
  localStorage.setItem("blogTag", blogTag);

  // newPostForm.classList.remove("newPostFormView");
};

submitBtn.addEventListener("click", submitPost);

// /* End Of Add New Post Submit Btn Action

// + Blog Post Data get from Localstorage Start

window.addEventListener("load", () => {
  const storageLength = localStorage.length;

  if (storageLength > 1) {
    blogBox.classList.add("blogBoxVisible");
    const blogImgG = localStorage.getItem("Image");
    const blogTitleG = localStorage.getItem("blogTitle");
    const blogDetailsG = localStorage.getItem("blogDetails");
    const blogTagG = localStorage.getItem("blogTag");

    document.getElementById("blogImgOutput").setAttribute("src", blogImgG);
    document.getElementById("blogTitleOutput").innerHTML = blogTitleG;
    document.getElementById("blogDetailsOutput").innerHTML = blogDetailsG;
    document.getElementById("blogTagOutput").innerHTML = blogTagG;
  } else {
    blogBox.classList.remove("blogBoxVisible");
  }
});

// + End Of Blog Post Data get from Localstorage Start

// + Newsletter Or Subscription Section Start

const subscribeBTN = document.querySelector(".subscribeBTN");
const subscribeMessage = document.querySelector("#subscribeMessage");
const subscribe = () => {
  subscribeMessage.classList.add("subscribeMessageDisplay");
  setTimeout(() => {
    subscribeMessage.classList.remove("subscribeMessageDisplay");
  }, 5000);
};

subscribeBTN.addEventListener("click", subscribe);
// + End Of Newsletter Or Subscription Section

// + Blog Post Text Read More Function

const blogTexts = document.querySelectorAll(".blogText");
let charactor = 100;

blogTexts.forEach((blogText) => {
  // - if blogText is less then charactor (100) then hide Read More BTN
  let blogTextLength = blogText.textContent.length;

  if (blogTextLength < charactor) {
    blogText.nextElementSibling.style.display = "none";
  } else {
    let displayText = blogText.textContent.slice(0, charactor);
    let moreText = blogText.textContent.slice(charactor);

    blogText.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

const readMoreText = (btn) => {
  let post = btn.parentElement;

  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");

  btn.textContent == "Read More"
    ? (btn.textContent = "Read Less")
    : (btn.textContent = "Read More");
};

// readMore.addEventListener("click", readMoreText);

// + End Of Blog Post Text Read More Function

// + Contact Us form Submit Start

const contactSubmitBtn = document.getElementById("contactSubmitBtn");

const submitContactUsForm = () => {
  alert("Your Message sent Successfully");
};

contactSubmitBtn.addEventListener("click", submitContactUsForm);

// + End Of Contact Us form Submit Start

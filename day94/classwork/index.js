// 1) გამოიყენეთ https://dummyjson.com/docs/posts ეს API იმისათის რომ, შეძლოთ პოსტების წამოღება და დარენდერება, როგორც ფბზე ხდება  news feed. შექმენით navigation სადაც გექნებათ რამდენიმე ლინკი, News Feed, Registration, Authorization

const main = document.querySelector("div");
const form = document.querySelector("form");
const search = form.search.value;

const renderInfo = (posts) => {
  main.innerHTML = "";
  for(const post of posts){
    main.innerHTML += `
      <div>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <p>Views: ${post.views}</p>
        <p>Likes ${post.reactions.likes}. Dislikes ${post.reactions.dislikes}</p>
        <p>Tags: ${post.tags}</p>
        <br />
      </div>
    `

    if (search === posts.title) {
        main.innerHTML += `
            <div>
                <h2>${search}</h2>
                <p>${post.body}</p>
                <p>Views: ${post.views}</p>
                <p>Likes ${post.reactions.likes}. Dislikes ${post.reactions.dislikes}</p>
                <p>Tags: ${post.tags}</p>
                <br />
            </div>
        `
    }
  }
}

const fetchInfo = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/posts`);
    const data = await response.json();
    renderInfo(data.posts);

  } catch(error) {
    console.log(`My code error: ${error}`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchInfo();
})

search.addEventListener("change", (e) => {
    e.preventDefault();
    
    fetchInfo(`https://dummyjson.com/posts/search?q=${e.target.post.value}`);
})
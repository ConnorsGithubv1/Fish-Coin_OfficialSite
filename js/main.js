
/***************Post**************************/
const posts = document.querySelector(".posts");
const post_data = [
  ['images/title.png',''," ",'images/title.png',150,'',2],
  ['images/1.jpg','Lavender Seas'," ",'images/1.jpg',150,'',2],
  ['images/2.jpg','Coastal Stop'," ",'images/2.jpg',150,'',2],
  ['images/3.jpg','Azure Bloom'," ",'images/3.jpg',150,'',2],
  ['images/4.jpg','Verdant Retreat'," ",'images/4.jpg',150,'',2],
  ['images/5.jpg','Lull Isle'," ",'images/5.jpg',150,'',2],
  
]

if(posts)
  for (var i = 0; i < post_data.length; i++) {
    const post_div = document.createElement('div')
    post_div.classList.add("post");
    post_div.innerHTML = `
    <div class="info">
      <div class="person">
          <a href="#">${post_data[i][1]}</a>
      </div>
      <div class="more">
          
      </div>
    </div>
    <div class="image">
      <img src="${post_data[i][3]}" >
    </div>
    <div class="desc">
      <div class="icons">
          <div class="icon_left d-flex">
              
              <div class="chat">

              </div>
              <div class="send">
                  
              </div>
          </div>
          <div class="save not_saved">
              
          </div>
      </div>
      <div class="liked">
          
      </div>
      <div class="post_desc">
          
      </div>
    </div>
      `;
    posts.appendChild(post_div);
  }


//love button

let love_icons = document.querySelectorAll(".like");
love_icons.forEach(function(icon){
  icon.addEventListener("click",function(){
      let not_loved = icon.children[0];
      let loved = icon.children[1];
      icon.classList.toggle("love");
      not_loved.classList.toggle("hide_img");
      loved.classList.toggle("display");
  })
});


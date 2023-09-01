 const handleCategory = async ()=>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await res.json();
    const categoryList=document.getElementById('categoryList');
    // console.log(data.data[1].category);
    data.data.forEach(category  =>{
        // console.log(category.category);
        const button = document.createElement('button')
        button.classList = "bg-gray-200 text-[252525B3] px-3 py-[2px] mr-3  rounded text-sm"
        button.innerHTML = `
            <button onclick=loadData(${category.category_id})>${category.category}</button>
        `
        
        categoryList.appendChild(button)
    });
   
    

 }
 const loadData = async(id)=>{
    const card = document.getElementById('cardSection')
    card.textContent=''
    const res =await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    // console.log(id);
    // console.log(data);
    if(data.data.length===0){
       const div=document.createElement('div') 
       div.classList="text-2xl w-[100%] my-20 mx-[440px] font-bold justify-centre items-centre"
       div.innerHTML = `
            <p class="text-red-500 text-centre pl-2 ">There is no data here!</p>
            <p class="text-blue-500 tex">Thanks for your interest!</p>
       `
       card.appendChild(div)
    }
    
    data.data.forEach(content=>{
        // console.log(content.others.posted_date);
        const time = content.others.posted_date;
        
        const hour = parseInt(time/3600)
        const minute = parseInt((time%3600)/60);
        console.log(typeof time,typeof hour,typeof minute);
        // console.log(parseInt(time/3600),parseInt((time%3600)/60));
        const div = document.createElement('div')
    div.classList = "card card-compact bg-base-100 "
    div.innerHTML =`
    <figure><img class="h-[15rem] object-cover " src="${content.thumbnail}" /></figure>
    
    <div class=" ">
    <p class=" bg-red-500 rounded w-[50%] text-center  mt-[-1.2rem] mr-0 ml-auto text-xs text-white font-medium "> ${time*1 ? `${hour} hrs ${minute} mnt ago` : ""} </p></div>
    
    <div class="card-body flex flex-row justify-between">
     
      <div class="w-[20%] "><img class="shrink-0 w-[2.1rem] h-[2.1rem] rounded-[2.1rem]" src="${content.authors[0].profile_picture}">
      </div>
      <div class="card-actions flex flex-col flex-1  ">
        <h3 class="text-base font-bold">${content.title}</h3>
        <div>
        <p><span class="text-[#171717B2] font-normal">${content.authors[0].profile_name}</span>
        <span id="ternary" class="inline-block mb-[-5px]">${content.authors[0].verified ? `<img src="./images/fi_10629607.png" /> `:""}</p>
        </div>
        <p class="text-[#171717B2] font-normal">${content.others.views} views</p>
      </div>
      
    </div>
    `
    card.appendChild(div)
    })
    
 }
 handleCategory();
 loadData(1000)
 
 
const goToBlog =()=>{
    localStorage.setItem('reload','true')
    window.location.href = "blog.html"
}
if(localStorage.getItem(reload)){
    localStorage.removeItem('reload');
    location.reload;
}
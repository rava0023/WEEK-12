var imageLinks = {
  "Vancover":"http://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg",
  "Montreal": "https://www.quebecoriginal.com/sites/default/files/h-montreal_3.jpg",
  "Calgary":"https://i.cbc.ca/1.5028858.1550954683!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/saddledome-night.jpg",
  "Toronto":"https://www.ctvnews.ca/polopoly_fs/1.4016815.1531850422!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg",
  "Ottawa":"https://www.fasken.com/-/media/29b8b6a371344d40a392350b395691d6.ashx?mw=850&hash=357BA709C706A26416E56313973687156265757F",
  "Reginia":"https://images.tourismsaskatchewan.com/sitecollectionimages/Regina2.jpg",
  "Saskatoon":"https://www.macleans.ca/wp-content/uploads/2017/04/26.-Saskatoon_Saskatchewan.jpg",
  "Edmonton":"https://sharpmagazine.com/wp-content/uploads/2018/02/Travel-Feature-Image-Recovered-1600x856.jpg",
  "Quebec City":"https://i0.wp.com/www.toeuropeandbeyond.com/wp-content/uploads/2015/09/quebec-city-guide-9.jpg?fit=1360%2C860&ssl=1",
  "Winnipeg":"https://www.macleans.ca/wp-content/uploads/2017/04/12.-Winnipeg_Manitoba.jpg",
  "Hamilton":"https://dance-attack-workshops.com/wp-content/uploads/2011/08/Hamilton-City-Centre-Shopping-Mall-in-Ontario-Canada-000025240817_Large.jpg",
  "Victoria":"https://cms.hostelworld.com/hwblog/wp-content/uploads/sites/2/2018/05/Things-to-do-in-Victoria-BC-Parliament-Building-@AlbertPego.jpg"
}

function fillImages()
{
    for(var id in imageLinks)
    {
      var box = document.getElementById('box'); 
      var boxImg = document.getElementById('boxImg');
      var description = document.getElementById('description');
      var imgContainer = document.createElement('div');
      var imgDesc = document.createElement('div');
      var img = document.createElement('img'); 
        
      imgContainer.setAttribute("id", "imageContainer"+id);
      imgContainer.className = "itemContainer";
      imgDesc.className = "overlayDesc";
      img.src = imageLinks[id]; 
      img.className = "item"; 
      img.alt = id;
      img.onclick = function()
      
      {
        box.style.display = "block";
        boxImg.src = this.src;
        description.innerHTML = this.alt;
      }
      
      var span = document.getElementById('imageClose'); 
      span.onclick = function()
      {
        box.style.display = "none";
      }

      imgDesc.innerHTML = id;
      document.getElementById('container').appendChild(imgContainer);
      document.getElementById('imageContainer'+id).appendChild(img);
      document.getElementById('imageContainer'+id).appendChild(imgDesc);

    }
}
function hoverEffect()
{
  $(".item").wrap('<div class="alt-wrap"/>');
  $(".item").each(function() {
  $(this).after('<p class="alt">' + $(this).attr('alt') + '</p>');
  })
}

window.onload = function()
{
    fillImages();
};


  var rdata;
var xhr=new XMLHttpRequest();
         xhr.open("GET","https://api.github.com/users/Rishabh-1999/repos",true);
        xhr.onload=function()
        {
          var load=document.getElementById('loading');
          loading.style.display = 'none';
          var dataString=xhr.responseText;
          data=JSON.parse(dataString);
           rdata=data;
          for(i in data)
          {
            addRepo(data[i]);
          }
        }
        xhr.send();

function addRepo(obj)
{
  var div1=document.createElement('div');
  div1.setAttribute("class","card");

  var div2=document.createElement('div');
  div2.setAttribute("class","card");
  div2.setAttribute("style","padding: 0;margin:0");

  var a1=document.createElement('a');
  a1.setAttribute("class","card-link");
  a1.setAttribute("data-toggle","collapse");
  a1.setAttribute("href",obj.id);
  a1.setAttribute("onclick","getReadme("+"'"+obj.id+"'"+","+"'"+obj.name+"'"+")")

  var div3=document.createElement('div');
  div3.setAttribute("class","content");

  var div4=document.createElement('div');
  div4.setAttribute("class","year");
  div4.innerHTML=(obj.created_at).substring(0, 4);
  if(div4.innerHTML=="2019");
  {
    var span10=document.createElement('span');
    span10.setAttribute("class","badge badge-secondary");
    span10.innerHTML="      New";
    div4.appendChild(span10);
  }
  div3.appendChild(div4);

  var div5=document.createElement('div');
  div5.setAttribute("class","maincontent");
  div5.innerHTML=obj.name+"  ";

  var a2=document.createElement('a');
  a2.setAttribute("href",obj.html_url)
  var i1=document.createElement('i');
  i1.setAttribute("style","color:black;font-weight:130%;")
  i1.setAttribute("class","fa fa-github");

  a2.appendChild(i1);

  div5.appendChild(a2);

  div3.appendChild(div5);

  var div6=document.createElement('div');
  div6.setAttribute("class","lan");
  div6.innerHTML="  "+obj.language;
  div3.appendChild(div6);

  a1.appendChild(div3);

  div2.appendChild(a1);
  div1.appendChild(div2);

  var a3=document.createElement('a');
  a3.setAttribute("href",obj.html_url);

  var div7=document.createElement('div');
  div7.setAttribute("id",obj.id);
  div7.setAttribute("class","collapse show");
  div7.setAttribute("data-parent","#accordion");
  div7.setAttribute("style","padding :0;margin:0;color:black;");

  var div8=document.createElement('div');
  div8.setAttribute("class","card-body");
  div8.setAttribute("style","padding :0;margin:0;color:black;");

  div7.appendChild(div8);

  a3.appendChild(div7);

  div1.appendChild(a3);

  document.getElementById('accordion').appendChild(div1);

}

function getReadme(id,name)
{
  $.ajax({
  url: 'https://api.github.com/repos/Rishabh-1999/'+name+'/readme',
  headers: { 'Accept': 'application/vnd.github.html' }
}).done(function(data) {
  document.getElementById(id).innerHTML=data;
});
document.getElementById(id).style.margin='25px';
}
function search()
{
  document.getElementById('accordion').innerHTML=""
  var val=document.getElementById('searchinput').value;
  for(i in rdata)
  if((rdata[i].name).includes(val))
        addRepo(rdata[i])
}
var xhr = new XMLHttpRequest();
var url = "./health_article.json";

xhr.open("GET", url, true);
xhr.responseType = "json";

xhr.onload = function () {
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById("articles");

  articles.forEach(function (article) {
    var articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    var title = document.createElement("h2");
    title.textContent = article.title;

    var description = document.createElement("p");
    description.textContent = article.description;

    var waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve:";

    var waysList = document.createElement("ul");
    article.ways_to_achieve.forEach(function (way) {
      var listItem = document.createElement("li");
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    var benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits:";

    var benefitsList = document.createElement("ul");
    article.benefits.forEach(function (benefit) {
      var listItem = document.createElement("li");
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);
    articlesDiv.appendChild(articleDiv);
  });
};

xhr.send();

var newXhr = new XMLHttpRequest();
var newUrl = "./news_article.json";

newXhr.open("GET", newUrl, true);
newXhr.responseType = "json";

newXhr.onload = function () {
  var news = newXhr.response.news;
  var newsDiv = document.getElementById("news");

  news.forEach(function (news) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("new");

    var title = document.createElement("h2");
    title.textContent = news.test1;

    var description = document.createElement("h3");
    description.textContent = news.test2;

    var list = document.createElement("ul");
    news.test3.forEach(function (test) {
      var listItem = document.createElement("li");
      listItem.textContent = test;
      list.appendChild(listItem);
    });

    newsDiv.appendChild(newDiv);
    newDiv.appendChild(title);
    newDiv.appendChild(description);
    newDiv.appendChild(list);
  });
};

newXhr.send();

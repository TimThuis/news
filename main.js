$(document).ready(function() {
  app.call();
  alert("use the key 'p' to pause, 's' to start and the 'r' to reverse the timeline")
});

var app = new Vue({
  el: '#app',
  data: {
    url: 'https://newsapi.org/v1/articles?source=the-guardian-uk&sortBy=top&apiKey=3e22f2fcc1344975ae2b2e69379e2a6e',
    articles: '',
    articleDate: '',
    articleTitle: '',
    articleDesc: '',
    articleImg: '',
    nextArticle: '',
    counter: 0,
    articlesLength: 0,
    showImg: false,
  },
  methods: {
    call: function() {
      axios.get(app.url)
        .then(function(response) {
          app.articles = response.data.articles;
          app.articlesLength = app.articles.length;
          console.info('succesfully retrieved data');
        })
        .catch(function(error) {
          console.error('Enable to retrieve data');
        });
    },
    setData: function() {
      if (this.counter != this.articlesLength) {
        this.articleTitle = this.articles[this.counter].title;
        this.articleDate = moment(this.articles[this.counter].publishedAt).format("dddd D MMM YYYY");
        this.articleDesc = this.articles[this.counter].description;
        this.showImg = true;
        this.articleImg = this.articles[this.counter].urlToImage;
        if ((this.counter + 1) != this.articlesLength) {
          this.nextArticle = this.articles[this.counter + 1].title;
        } else {
          this.nextArticle = "no new articles";
        }
        this.counter += 1;
        tl.restart();
      }
    },
  }
});


const tl = new TimelineMax();
tl.eventCallback("onComplete", app.setData);

document.addEventListener('keydown', keyboardClick);

function keyboardClick(event) {
  switch (event.key) {
    case "p":
      tl.pause();
      break;
    case "s":
      tl.play();
      break;
    case "r":
      tl.reverse();
      break;
    default:
      console.log(event.key);
  }
}

tl.to(".timeline-active", 4, {
  ease: Power0.easeNone,
  width: '100%',
}, "start")
  .from(".imac", 1, {
    transform: 'rotateY(0deg)'
  }, "start"
)
  .from(".article-title", 0.5, {
    opacity: '0',
    transform: 'translateX(20px)',
  }, "start")
  .from(".article-description", 0.5, {
    opacity: '0',
    transform: 'translateX(20px)',
  }, "start+=0.25")
  .from(".article-img", 1, {
    transform: 'rotateY(0deg)'
  }, "start"
)
  .from(".shadow", 1, {
    transform: 'rotateY(0deg)'
  }, "start"
)
  .to(".imac", 1, {
    transform: 'rotateY(0deg)'
  }, "imac"
)
  .to(".article-img", 1, {
    transform: 'rotateY(0deg)'
  }, "imac"
)
  .to(".shadow", 1, {
    transform: 'rotateY(0deg)'
  }, "imac"
)
  .to(".article-title", 0.5, {
    opacity: '0',
    transform: 'translateX(20px)',
  }, "label-=0.75")
  .to(".article-description", 0.5, {
    opacity: '0',
    transform: 'translateX(20px)',
  }, "label-=0.5")

const string = 'mpc~Hcgz[uRm]&#125;`@jC';
alert(string.unescapeHTML());

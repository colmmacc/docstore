var homepage = 'http://notesfromthesound.com'

$.domReady(function() {
  var page = document.location.pathname
  if (page[page.length - 1] == '/') page = page.substring(0, page.length - 1)
  if (!page) {
    page = "/default"
  }

  var url = '/text' + page + '.md'
  $.ajax({
    url: url,
    type:'html',
    success: function(resp) {
      if (!resp) {
        window.location = homepage
      }

      document.getElementById('content').innerHTML = markdown.toHTML(resp)
      $('pre').each(function(el, index) {
        hljs.highlightBlock(el, '  ')
      })
    }})

  document.title = page;
  document.getElementById('viewsource').setAttribute('href', 
    'http://composedit.net' + url)
  
  MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [['$','$'], ['\\(','\\)']],
    processEscapes: true
  }
});
})

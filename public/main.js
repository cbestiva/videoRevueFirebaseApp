var app = new Vue({
  el: '#app',
  data: {
    courses: ['Java Web App and Servlet', 'Javascript Roadtrip'],
    courseName: 'Java Web App and Servlet',
    userName: 'Sarah Holderness',
    userTitle: 'Author',
    reviews: [
      {
        module: 'Module 1',
        clip: 'Clip 1',
        timestamp: '0:00',
        assignee: 'Sarah',
        file: 'https://www.dropbox.com/s/6y9yicrvg6gllai/Level1-1_1AuthorSlide.m4v?dl=0',
        comment: 'Slide needs to be updated with author info.'
      },
      {
        module: 'Module 1',
        clip: 'Clip 1',
        timestamp: '0:46',
        assignee: 'Sarah',
        file: null,
        comment: 'Should there be audio here? I can try to record and send it to you if you don\'t have it.'
      }
    ]
  }
})

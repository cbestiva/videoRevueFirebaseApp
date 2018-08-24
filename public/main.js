var app = new Vue({
  el: '#app',
  data: {
    assignee: "",
    file: "",
    module: "",
    clip: "",
    comment: "",
    courses: ['Java Web App and Servlet', 'Javascript Roadtrip'],
    courseName: 'Java Web App and Servlet',
    userName: 'Sarah Holderness',
    userTitle: 'Author',
    reviews: [],
    courseId: 'Java Web App And Servlet'
  },
  mounted() {
    db.collection('courses').doc(this.courseId).collection('reviews').onSnapshot((querySnapshot) => {
      console.log("querySnapshot.docs ", querySnapshot.docs)
      if (querySnapshot !== null) {
        this.reviews = querySnapshot.docs.map((doc) => doc.data());
      } else {
        console.log("No such document!");
      }
    })
  },
  methods: {
    processForm: function (data) {
      console.log("this.comment ", this.comment)
      const formData = {
        courseId: this.courseId,
        module: this.module,
        clip: this.clip,
        file: this.file,
        assignee: this.assignee,
        comment: this.comment,
      }
      addReview(formData)
    }
  }
})
